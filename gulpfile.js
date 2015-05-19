'use strict';
// Load liferay-sdk tasks
// TODO: Removes depencency on tasks project.
try { require('require-dir')('node_modules/liferay-sdk/tasks'); } catch (err) {}
// Load custom tasks from the `tasks` directory
try { require('require-dir')('tasks'); } catch (err) {}
