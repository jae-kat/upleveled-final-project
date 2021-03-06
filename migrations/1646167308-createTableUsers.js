exports.up = async (sql) => {
  await sql`
		CREATE TABLE users (
			id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			name varchar(30) NOT NULL,
			avatar varchar(80) NOT NULL,
			bio varchar(300) NOT NULL,
			email varchar(30) NOT NULL UNIQUE,
			pwhash varchar(90) NOT NULL
		)`;
};

exports.down = async (sql) => {
  await sql`
		DROP TABLE users
		`;
};
