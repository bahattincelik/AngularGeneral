import { InjectionToken } from "@angular/core";
import { ProductService } from "./productservice";

export const productServiceIT = new InjectionToken<ProductService>('productService');
