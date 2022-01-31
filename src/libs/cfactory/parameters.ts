import { ComponentRef, ViewContainerRef } from '@angular/core';

export class Parameters {

	constructor(
		public parameters: any = {},
		public ref: ComponentRef<any>,
		public viewRef: ViewContainerRef,
		public cfunc: any = {}
	) {

	}

	public iskey(key: string): boolean {
		return key in this.parameters;
	}

	public getValue(key: any): any {
		return (key in this.parameters) ? this.parameters[key] : null;
	}

	public setValue(key: any, value: any): void {
		this.parameters[key] = value;
	}

	public getParameters() {
		return this.parameters;
	}

	public filter(flist: any): any {
		let o = {};
		flist.forEach(
			(item: any) => {
				if (item in this.parameters) {
					o[item] = this.parameters[item];
				}
			}
		);
		return o;
	}

	public getcbs(): any {
		return (Object.keys(this.cfunc).length == 0) ? null : this.cfunc;
	}

}