import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Endpoint} from 'react-native-pjsip';
import {Platform} from 'react-native';

export async function initCall({payload}) {
  console.tron(payload);
}

export default all([takeLatest('@sip/CALL_REQUEST', initCall)]);
