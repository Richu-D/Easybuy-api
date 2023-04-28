//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-login_service-SSD_SERVICE_ID_sd_5fL5E0bOyWk1AP44
import { login_service as SSD_SERVICE_ID_sd_5fL5E0bOyWk1AP44 } from './sd-services/loginEmployee/login_service';
//CORE_REFERENCE_IMPORT-login_api-SSD_SERVICE_ID_sd_B5rURuYMdmSenaWz
import { login_api as SSD_SERVICE_ID_sd_B5rURuYMdmSenaWz } from './sd-services/loginEmployee/login_api';
//CORE_REFERENCE_IMPORT-employee_service-SSD_SERVICE_ID_sd_Gyav1X4P61IDnDgD
import { employee_service as SSD_SERVICE_ID_sd_Gyav1X4P61IDnDgD } from './sd-services/createEmployee/employee_service';
//CORE_REFERENCE_IMPORT-employee_api-SSD_SERVICE_ID_sd_FgFevLbYZwHcUEPc
import { employee_api as SSD_SERVICE_ID_sd_FgFevLbYZwHcUEPc } from './sd-services/createEmployee/employee_api';



export const UserRoutes = [

//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-login_service-SSD_SERVICE_ID_sd_5fL5E0bOyWk1AP44
SSD_SERVICE_ID_sd_5fL5E0bOyWk1AP44,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-login_api-SSD_SERVICE_ID_sd_B5rURuYMdmSenaWz
SSD_SERVICE_ID_sd_B5rURuYMdmSenaWz,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employee_service-SSD_SERVICE_ID_sd_Gyav1X4P61IDnDgD
SSD_SERVICE_ID_sd_Gyav1X4P61IDnDgD,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employee_api-SSD_SERVICE_ID_sd_FgFevLbYZwHcUEPc
SSD_SERVICE_ID_sd_FgFevLbYZwHcUEPc,

];

