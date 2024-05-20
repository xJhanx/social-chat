import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ChatLayoutComponent } from './app/views/chat-layout/chat-layout.component';

bootstrapApplication(ChatLayoutComponent, appConfig)
  .catch((err) => console.error(err));
