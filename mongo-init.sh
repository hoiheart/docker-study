#!/bin/bash
set -e;

if [ -n "${MONGODB_USER:-}" ] && [ -n "${MONGODB_PASS:-}" ]; then
	"${mongo[@]}" "$MONGODB_DATABASE" <<-EOJS
		db.createUser({
			user: $(_js_escape "$MONGODB_USER"),
			pwd: $(_js_escape "$MONGODB_PASS"),
			roles: [ { role: $(_js_escape "readWrite"), db: $(_js_escape "$MONGODB_DATABASE") } ]
			})
	EOJS
else
	# print warning or kill temporary mongo and exit non-zero
fi