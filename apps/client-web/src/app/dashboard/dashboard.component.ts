import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStore } from '../auth/auth.store';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="min-h-screen bg-[#080c14] text-white font-['Outfit']">
      <!-- Sidebar / Navigation -->
      <nav class="border-b border-white/5 bg-white/5 backdrop-blur-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16 items-center">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">E</div>
              <span class="text-xl font-bold tracking-tight">EasyPharma</span>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="hidden md:block text-right mr-2">
                <p class="text-sm font-medium leading-none">{{ authStore.user()?.name }}</p>
                <p class="text-xs text-gray-400 mt-1 uppercase tracking-wider">{{ authStore.user()?.role }}</p>
              </div>
              <button 
                (click)="authStore.logout()"
                class="hover:bg-white/10 p-2 rounded-lg transition-colors text-gray-400 hover:text-white"
                title="Logout"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header class="mb-10 animate-slide-up">
          <h2 class="text-3xl font-bold">Dashboard</h2>
          <p class="text-gray-400 mt-2">Welcome back to your pharmacy management system.</p>
        </header>

        <!-- Stats Overview -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div class="stat-card animate-slide-up" style="animation-delay: 0.1s">
            <p class="text-sm text-gray-400 mb-1">Total Stock</p>
            <p class="text-3xl font-bold">1,284</p>
            <div class="mt-4 flex items-center text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded w-fit">
              <span>+12% vs last month</span>
            </div>
          </div>
          <div class="stat-card animate-slide-up" style="animation-delay: 0.2s">
            <p class="text-sm text-gray-400 mb-1">Active Prescriptions</p>
            <p class="text-3xl font-bold">42</p>
            <div class="mt-4 flex items-center text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded w-fit">
              <span>6 pending review</span>
            </div>
          </div>
          <div class="stat-card animate-slide-up" style="animation-delay: 0.3s">
            <p class="text-sm text-gray-400 mb-1">Expiring Soon</p>
            <p class="text-3xl font-bold text-amber-400">18</p>
            <div class="mt-4 flex items-center text-xs text-amber-400 bg-amber-400/10 px-2 py-1 rounded w-fit">
              <span>Next 30 days</span>
            </div>
          </div>
          <div class="stat-card animate-slide-up" style="animation-delay: 0.4s">
            <p class="text-sm text-gray-400 mb-1">Low Stock Alerts</p>
            <p class="text-3xl font-bold text-red-400">5</p>
            <div class="mt-4 flex items-center text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded w-fit">
              <span>Action required</span>
            </div>
          </div>
        </div>

        <!-- Featured Section Placeholder -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6 min-h-[400px]">
            <h3 class="font-bold text-lg mb-4">Inventory Overview</h3>
            <div class="flex items-center justify-center h-full text-gray-500 uppercase tracking-widest text-sm italic">
              Chart implementation coming in Phase 3
            </div>
          </div>
          <div class="bg-white/5 border border-white/5 rounded-2xl p-6">
            <h3 class="font-bold text-lg mb-4">Quick Actions</h3>
            <div class="space-y-4">
              <button class="action-btn">
                <span>Add New Medication</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
              </button>
              <button class="action-btn">
                <span>Generate Report</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                </svg>
              </button>
              <button class="action-btn">
                <span>User Management</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
    styles: [`
    .stat-card {
      @apply bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/[0.07] transition-all;
    }
    .action-btn {
      @apply w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all font-medium text-sm;
    }
    .animate-slide-up {
      animation: slide-up 0.5s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
    }
    @keyframes slide-up {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class DashboardComponent {
    public authStore = inject(AuthStore);
}
