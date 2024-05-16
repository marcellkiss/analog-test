// import { injectLoad } from '@analogjs/router';
import { injectLoad } from '@analogjs/router';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { load } from './test.server';

@Component({
  standalone: true,
  template: `
    <h2>Home</h2>

    Loaded: {{ data().loaded }}
  `,
})
export default class BlogComponent {
  // data = signal({ loaded: false });
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
