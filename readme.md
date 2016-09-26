# Prototype Playground
What is it? This is a base environment, with the minimum amount of setup and dependencies to start building web prototypes.

# Getting started
Clone this repository:

1. install dependencies. (If you don't have npm installed, see the Prerequisites section)
    ```
    npm install
    ```
2. Build, start the development server, and start watchers with:
    ```
    npm run start
    ```
    This will start a development server at `localhost:3000`. The console will also export a "external" ip address that can be accessed from other devices if applicable.

# Gulp tasks
This project leverages the power of Gulp. The build tasks are a part of the `npm run start` command. However, you may use the following gulp commands as needed.

| command | descripton |
| ------ | ------- |
| watch | Runs necessary build scripts as files are modified. |
| sass | Compile sass to build directory |
| serve | Starts a browserSync server at default port :3000 |

# Prerequisites
* [Node with npm](https://nodejs.org/en/)
* [GulpJS](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) needs to be installed for running build steps. If gulp is not installed. run the following:

    ```bash
        npm install npm install --global gulp-cli
    ```
