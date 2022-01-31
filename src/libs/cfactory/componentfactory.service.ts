import { ComponentFactoryResolver, ComponentRef, Injectable, ReflectiveInjector, ViewContainerRef } from '@angular/core';
import { Parameters } from './parameters';

@Injectable()
export class ComponentFactoryService {
	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	public getComponent(refDOM: ViewContainerRef, component: any, parameters: any, cfunc: any = null, css: any = null): ComponentRef<any> {
		try {
			let factory = this.componentFactoryResolver.resolveComponentFactory(component);
			let injector = ReflectiveInjector.fromResolvedProviders([], refDOM.parentInjector);
			let comp = factory.create(injector);
			if (css) {
				css.forEach((elem: string) => {
					comp.location.nativeElement.classList.add(elem);
				})
			}
			comp.instance["parameters"] = new Parameters(parameters, comp, refDOM, cfunc);
			comp.changeDetectorRef.detectChanges();
			return comp;
		}
		catch (e) {
			console.log(e.message);
		}
	}


	public insertComponent(refDOM: ViewContainerRef, component: any, parameters: any, position: number = 0, cfunc: any = null, css: any = null): ComponentRef<any> {
		try {
			let comp = this.getComponent(refDOM, component, parameters, cfunc, css);
			refDOM.insert(comp.hostView, position);
			return comp;
		}
		catch (e) {
			console.log(e);
		}
	}


	public addComponent(refDOM: ViewContainerRef, component: ComponentRef<any>, position: number = 0) {
		try {
			refDOM.insert(component.hostView, position);
		}
		catch (e) {
			console.log(e);
		}
	}

	public push(refDOM: ViewContainerRef, component: any, parameters: any, cfunc: any = null, css: any = null): ComponentRef<any> {
		try {
			let comp = this.getComponent(refDOM, component, parameters, cfunc, css);
			this.add(refDOM, comp, 0);
			return comp;
		}
		catch (e) {
			console.log(e);
		}
	}

	public append(refDOM: ViewContainerRef, component: any, parameters: any, cfunc: any = null, css: any = null): ComponentRef<any> {
		try {
			let comp = this.getComponent(refDOM, component, parameters, cfunc, css);
			this.add(refDOM, comp, refDOM.length);
			return comp;
		}
		catch (e) {
			console.log(e);
		}
	}

	public add(refDOM: ViewContainerRef, component: ComponentRef<any>, position: number) {
		try {
			refDOM.insert(component.hostView, position);
		}
		catch (e) {
			console.log(e);
		}
	}

	public insert(refDOM: ViewContainerRef, component: any, parameters: any, cfunc: any = null, css: any = null): ComponentRef<any> {
		try {
			let comp = this.getComponent(refDOM, component, parameters, cfunc, css);
			refDOM.clear();
			this.add(refDOM, comp, refDOM.length);
			return comp;
		}
		catch (e) {
			console.log(e);
		}
	}
} 