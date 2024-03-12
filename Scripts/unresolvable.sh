#!/bin/bash

fqdn=$1

if [ -n "$(dig +short $fqdn)" ]; then
	echo "$fqdn resolves"
else
	echo "$fqdn does not resolve"
	echo $fqdn >> unresolvable.txt
fi
