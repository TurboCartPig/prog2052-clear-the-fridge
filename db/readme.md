# Database stuff

MongoDB is run as a docker container by docker compose.

## Notes

* FIXME: Authentication is currently not configure.
* FIXME: Persistence is disabled, all data is wiped on restart.
* `init.js` is run when the database starts, and does data definition.
* You can connect to MongoDB via mongosh or mongo compass (GUI) in
  order to view or modify the data live.
