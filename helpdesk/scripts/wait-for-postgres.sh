#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
  echo "Usage: $0 host [port] [cmd...]"
  exit 1
fi

HOST="$1"
PORT="${2:-5432}"
shift 2 || true
CMD="$@"

TIMEOUT=${WAIT_TIMEOUT:-60}

echo "Waiting for PostgreSQL at $HOST:$PORT (timeout ${TIMEOUT}s)"

for i in $(seq 1 "$TIMEOUT"); do
  if (echo > /dev/tcp/${HOST}/${PORT}) >/dev/null 2>&1; then
    echo "Postgres is available at ${HOST}:${PORT}"
    if [ -n "$CMD" ]; then
      echo "Executing: $CMD"
      exec $CMD
    fi
    exit 0
  fi
  sleep 1
done

echo "Timed out waiting for ${HOST}:${PORT} after ${TIMEOUT} seconds"
exit 1
