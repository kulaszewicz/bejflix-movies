import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions';
import * as serviceAccount from '../ServiceAccountKey.json';

const server = express();

export const createNestServer = async (expressInstance) => {

  admin.initializeApp({
    // @ts-ignore
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://bejflix.firebaseio.com'
  });
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  app.enableCors();

  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);