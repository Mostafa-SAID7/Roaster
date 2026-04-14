import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoffeeOrigin, RoastLevel, BrewMethod, DeliveryOption, Product } from '../models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private origins: CoffeeOrigin[] = [
    {
      id: 'ethiopia',
      country: 'Yirgacheffe, Ethiopia',
      region: 'Yirgacheffe',
      bean: 'Heirloom Varietals',
      notes: 'Jasmine, Bergamot, Earl Grey Finish.',
      price: 320,
      latitude: 6.27,
      longitude: 38.75
    },
    {
      id: 'colombia',
      country: 'Huila, Colombia',
      region: 'Huila',
      bean: 'Caturra, Castillo',
      notes: 'Caramel, Red Apple, Silky Body.',
      price: 280,
      latitude: 2.0,
      longitude: -75.5
    }
  ];

  private roastLevels: RoastLevel[] = [
    {
      id: 0,
      title: 'Light Roast',
      description: 'Floral, Citrus, Tea-like brightness. Best for Pour Over.',
      filter: 'brightness(135%) sepia(0.1) contrast(105%) saturate(120%)'
    },
    {
      id: 1,
      title: 'Medium-Light Roast',
      description: 'Bright berry acidity, milk chocolate finish, delicate sweetness.',
      filter: 'brightness(115%) sepia(0.25) saturate(110%)'
    },
    {
      id: 2,
      title: 'Medium-Dark Roast',
      description: 'Caramel, Nutty notes with a full body and low acidity.',
      filter: 'brightness(85%) sepia(0.45) contrast(115%) saturate(90%)'
    },
    {
      id: 3,
      title: 'Dark Roast',
      description: 'Dark chocolate, smoky, bold punch. Perfect for Espresso.',
      filter: 'brightness(60%) sepia(0.7) contrast(135%) saturate(80%) hue-rotate(-15deg)'
    }
  ];

  private brewMethods: BrewMethod[] = [
    {
      id: 'pourover',
      name: 'Pour Over',
      grindSize: 'Medium-Fine',
      ratio: '1:16 (15g to 240g)',
      timing: '2.5 - 3 Minutes'
    },
    {
      id: 'frenchpress',
      name: 'French Press',
      grindSize: 'Coarse',
      ratio: '1:15 (20g to 300g)',
      timing: '4 Minutes'
    },
    {
      id: 'coldbrew',
      name: 'Cold Brew',
      grindSize: 'Extra Coarse',
      ratio: '1:8 (Concentrate)',
      timing: '16 - 20 Hours'
    },
    {
      id: 'espresso',
      name: 'Espresso',
      grindSize: 'Fine',
      ratio: '1:2 (18g to 36g)',
      timing: '25 - 30 Seconds'
    }
  ];

  private deliveryOptions: DeliveryOption[] = [
    { island: 'male', time: 'Next-Day Delivery', cost: 40 },
    { island: 'hulhumale', time: 'Next-Day Delivery', cost: 50 },
    { island: 'villimale', time: '2-Day Delivery', cost: 60 },
    { island: 'resort', time: 'Speedboat Transfer', cost: 0 }
  ];

  private selectedOrigin$ = new BehaviorSubject<CoffeeOrigin | null>(null);
  private selectedRoast$ = new BehaviorSubject<RoastLevel>(this.roastLevels[1]);

  constructor() {}

  getOrigins(): Observable<CoffeeOrigin[]> {
    return new Observable(observer => {
      observer.next(this.origins);
      observer.complete();
    });
  }

  getRoastLevels(): Observable<RoastLevel[]> {
    return new Observable(observer => {
      observer.next(this.roastLevels);
      observer.complete();
    });
  }

  getBrewMethods(): Observable<BrewMethod[]> {
    return new Observable(observer => {
      observer.next(this.brewMethods);
      observer.complete();
    });
  }

  getDeliveryOptions(): Observable<DeliveryOption[]> {
    return new Observable(observer => {
      observer.next(this.deliveryOptions);
      observer.complete();
    });
  }

  getOriginById(id: string): CoffeeOrigin | undefined {
    return this.origins.find(o => o.id === id);
  }

  getRoastById(id: number): RoastLevel | undefined {
    return this.roastLevels.find(r => r.id === id);
  }

  getBrewMethodById(id: string): BrewMethod | undefined {
    return this.brewMethods.find(b => b.id === id);
  }

  getDeliveryByIsland(island: string): DeliveryOption | undefined {
    return this.deliveryOptions.find(d => d.island === island);
  }

  setSelectedOrigin(origin: CoffeeOrigin): void {
    this.selectedOrigin$.next(origin);
  }

  getSelectedOrigin(): Observable<CoffeeOrigin | null> {
    return this.selectedOrigin$.asObservable();
  }

  setSelectedRoast(roast: RoastLevel): void {
    this.selectedRoast$.next(roast);
  }

  getSelectedRoast(): Observable<RoastLevel> {
    return this.selectedRoast$.asObservable();
  }
}
