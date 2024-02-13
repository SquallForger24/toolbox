#!/bin/bash

# Function to retrieve TLS certificates and parse FQDNs
get_cert_fqdns() {
	ip=$1
	cert_data=$(openssl s_client -connect "${ip}:443" -servername "${ip}" 2>/dev/null </dev/null)
	fqdns=$(echo "${cert_data}" | openssl x509 -text | grep -oP '(?<=DNS:)([^,]*)' | tr -d ' ')
	echo "${fqdns}"
}

# Function to send Curl requests with FQDN values as Host header value
send_curl_request() {
	ip=$1
	fqdns=$2
	for fqdn in ${fqdns//,/ }; do
		echo "sending curl request to ${fqdn} on ${ip}"
		response=$(curl -ki -H "Host: ${fqdn}" "https://${ip}:443" 2>&1)
		echo "${response}"
		echo -e "\n----------------------------------\n"
	done
}

# Main

ip=$1

fqdns=$(get_cert_fqdns "${ip}")
if [ -n "${fqdns}" ]; then
	send_curl_request "${ip}" "${fqdns}"
else
	echo "No FQDNs found for ${ip}"
fi
