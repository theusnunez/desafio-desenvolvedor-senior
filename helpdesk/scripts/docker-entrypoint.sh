#!/usr/bin/env bash
set -e

# Usage: docker-entrypoint.sh <cmd>
# It will wait for postgres, run migrations/seeds (if enabled), then exec the command

# Default values
WAIT_HOST=${DB_HOST:-db}
WAIT_PORT=${DB_PORT:-5432}
WAIT_TIMEOUT=${WAIT_TIMEOUT:-60}

# Ensure wait-for-postgres is executable
chmod +x /usr/src/app/scripts/wait-for-postgres.sh || true

# Wait for DB
/usr/src/app/scripts/wait-for-postgres.sh "$WAIT_HOST" "$WAIT_PORT" >/dev/null 2>&1 || true

# Run migrations if requested
if [ "${MIGRATE}" = "true" ] || [ "${MIGRATE}" = "1" ]; then
  echo "Running migrations..."
  node ace migration:run
fi

# Run seeds if requested
if [ "${SEED}" = "true" ] || [ "${SEED}" = "1" ]; then
  echo "Running seeds..."
  node ace db:seed
fi

# Exec the passed command (default is npm run start:prod)
exec "$@"
