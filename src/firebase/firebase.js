import {config} from './config';
import firebase from 'firebase';

firebase.initializeApp(config);

export var database = firebase.database();

// IMPORTANT: DB currently set out to be public e.g. everyone can read and write on it.
// TODO: implement AUTH