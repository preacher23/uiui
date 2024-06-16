import { CustomerComponent } from "../customer/customer.component";
import { HomeComponent } from "../home/customer.homecomponent";
import { SupplierComponent } from "../supplier/customer.suppliercomponent";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'Supplier', component: SupplierComponent },
    { path: '', component: HomeComponent }
    
];