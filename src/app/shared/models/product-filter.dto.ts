import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProductFilter{
    search: any;
    min_price !: number;
    max_price !: number;
    per_page !: number;
    page !: number;
    location: any = [];
    category_id: any = [];
    filters: any = [];
}