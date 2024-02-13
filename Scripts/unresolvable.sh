#!/bin/bash

fqdn=$1

if [ -n "$(dig +short $fqdn)" ]; then
	echo "$fqdn resolves externally"
else
	echo "$fqdn does not resolve externally!"
	echo $fqdn >> unresolvable.txt
fi
