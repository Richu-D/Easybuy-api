//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-logout_service-SSD_SERVICE_ID_sd_OJpQiNnhQFB3SmI6
import { logout_service as SSD_SERVICE_ID_sd_OJpQiNnhQFB3SmI6 } from './sd-services/logoutEmployee/logout_service';
//CORE_REFERENCE_IMPORT-logout_api-SSD_SERVICE_ID_sd_rLmXkMPbNOwmVU5w
import { logout_api as SSD_SERVICE_ID_sd_rLmXkMPbNOwmVU5w } from './sd-services/logoutEmployee/logout_api';
//CORE_REFERENCE_IMPORT-getEmployees-SSD_SERVICE_ID_sd_4fFTS6PEOZph7vVy
import { getEmployees as SSD_SERVICE_ID_sd_4fFTS6PEOZph7vVy } from './sd-services/getEmployee/getEmployees';
//CORE_REFERENCE_IMPORT-pre_middleware-SSD_SERVICE_ID_sd_2K7ZQGwU9ou5EBWf
import { pre_middleware as SSD_SERVICE_ID_sd_2K7ZQGwU9ou5EBWf } from './sd-services/employeeMiddleware/pre_middleware';
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
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-logout_service-SSD_SERVICE_ID_sd_OJpQiNnhQFB3SmI6
SSD_SERVICE_ID_sd_OJpQiNnhQFB3SmI6,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-logout_api-SSD_SERVICE_ID_sd_rLmXkMPbNOwmVU5w
SSD_SERVICE_ID_sd_rLmXkMPbNOwmVU5w,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-getEmployees-SSD_SERVICE_ID_sd_4fFTS6PEOZph7vVy
SSD_SERVICE_ID_sd_4fFTS6PEOZph7vVy,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-pre_middleware-SSD_SERVICE_ID_sd_2K7ZQGwU9ou5EBWf
SSD_SERVICE_ID_sd_2K7ZQGwU9ou5EBWf,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-login_service-SSD_SERVICE_ID_sd_5fL5E0bOyWk1AP44
SSD_SERVICE_ID_sd_5fL5E0bOyWk1AP44,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-login_api-SSD_SERVICE_ID_sd_B5rURuYMdmSenaWz
SSD_SERVICE_ID_sd_B5rURuYMdmSenaWz,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employee_service-SSD_SERVICE_ID_sd_Gyav1X4P61IDnDgD
SSD_SERVICE_ID_sd_Gyav1X4P61IDnDgD,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employee_api-SSD_SERVICE_ID_sd_FgFevLbYZwHcUEPc
SSD_SERVICE_ID_sd_FgFevLbYZwHcUEPc,

];

