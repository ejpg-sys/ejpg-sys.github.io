#!/bin/bash
#
# Script: integrity.sh
# Description: generate sha384 at base64 of ejpg-angular-impl.min.js >
# > and ejpg-bootstrap-impl.min.css
# Author: EJPG-SYS
# Copyright: (c) 2024-2025 EJPG-SYS
# License: Attribution-NonCommercial-NoDerivatives 4.0 International
openssl dgst -sha384 -binary ejpg-angular-impl.min.js | openssl base64 -A
openssl dgst -sha384 -binary ejpg-bootstrap-impl.min.css | openssl base64 -A
