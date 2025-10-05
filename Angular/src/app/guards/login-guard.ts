/*import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const email = sessionStorage.getItem('email');

  if (!email) {
    alert('Você precisa estar logado para acessar esta página.');
    router.navigate(['/']);
    return false;
  }

  return true;
};*/

// TESTANDO OUTRO MODO

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const email = sessionStorage.getItem('email');
    if (!email) {
      alert('Você precisa estar logado para acessar esta página.');
      router.navigate(['/']);
      return false;
    }
  } else {
    // No servidor, redirecione ou negue acesso
    router.navigate(['/']);
    return false;
  }

  return true;
};
