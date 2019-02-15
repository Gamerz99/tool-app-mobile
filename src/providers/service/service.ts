import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ServiceProvider {
  url = 'http://localhost/umesha/index.php/api';

  constructor(public http: Http) {

  }

  tool_list() {
    return this.http.get(this.url + '/tool_api/tool_list').map(res => res.json());
  }

  brand_list(tool) {
    return this.http.get(this.url + '/tool_api/brand_list/' + tool).map(res => res.json());
  }

  stock_list(tool, brand) {
    return this.http.get(this.url + '/stock_api/stock_list/' + tool + '/' + brand).map(res => res.json());
  }

  stock_item(id) {
    return this.http.get(this.url + '/stock_api/stock_item/' + id).map(res => res.json());
  }

  login(data) {
    return this.http.post(this.url + '/employee_api/login', data).map(res => res.json());
  }

  assign(data) {
    return this.http.post(this.url + '/assign_api/assign_tool', data).map(res => res.json());
  }

  unassign(data) {
    return this.http.post(this.url + '/assign_api/unassign_tool', data).map(res => res.json());
  }

  assign_list(id) {
    return this.http.get(this.url + '/assign_api/tool_list/' + id).map(res => res.json());
  }

  monthly_log(id) {
    return this.http.get(this.url + '/tool_api/month_log/' + id).map(res => res.json());
  }
}
