import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard.component';
import { TileComponent } from './tile/tile.component';
import { ThemeService } from '../core/services/theme.service';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatSlideToggleModule],
  declarations: [DashboardComponent, TileComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
