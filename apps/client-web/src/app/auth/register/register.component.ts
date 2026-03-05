import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthStore } from '../auth.store';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    template: `
    <div class="min-h-screen flex items-center justify-center bg-[#0a0f1d] p-4 font-['Outfit'] overflow-hidden relative">
      <!-- Background Blobs -->
      <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div class="w-full max-w-md z-10">
        <div class="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-8">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p class="text-gray-400">Join EasyPharma today and start managing your pharmacy efficiently</p>
          </div>

          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-5">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-300 ml-1">Full Name</label>
              <input 
                type="text" 
                formControlName="name"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder="John Doe"
              >
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-300 ml-1">Email Address</label>
              <input 
                type="email" 
                formControlName="email"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder="john@example.com"
              >
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-300 ml-1">Password</label>
              <input 
                type="password" 
                formControlName="password"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder="At least 8 characters"
              >
            </div>

            @if (authStore.error()) {
              <div class="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm italic">
                {{ authStore.error() }}
              </div>
            }

            <button 
              type="submit" 
              [disabled]="registerForm.invalid || authStore.isLoading()"
              class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none mt-4"
            >
              @if (authStore.isLoading()) {
                <span class="inline-block animate-spin mr-2">◌</span> Creating account...
              } @else {
                Get Started
              }
            </button>
          </form>

          <p class="text-center text-gray-400 text-sm">
            Already have an account? 
            <a routerLink="/login" class="text-blue-400 hover:text-blue-300 font-medium transition-colors">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  `,
    styles: [`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `]
})
export class RegisterComponent {
    private fb = inject(FormBuilder);
    public authStore = inject(AuthStore);

    registerForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });

    onSubmit() {
        if (this.registerForm.valid) {
            this.authStore.register(this.registerForm.value);
        }
    }
}
