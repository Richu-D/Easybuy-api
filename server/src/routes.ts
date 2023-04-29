//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-getEmployees-SSD_SERVICE_ID_sd_Dtowk1XP7ZlFbL53
import { getEmployees as SSD_SERVICE_ID_sd_Dtowk1XP7ZlFbL53 } from './sd-services/getEmployee/getEmployees';
//CORE_REFERENCE_IMPORT-pre_middleware-SSD_SERVICE_ID_sd_2BP2OhXJb0SjyHpQ
import { pre_middleware as SSD_SERVICE_ID_sd_2BP2OhXJb0SjyHpQ } from './sd-services/adminMiddleware/pre_middleware';
//CORE_REFERENCE_IMPORT-adminlogout_service-SSD_SERVICE_ID_sd_juY1oS6MqeJWXzjo
import { adminlogout_service as SSD_SERVICE_ID_sd_juY1oS6MqeJWXzjo } from './sd-services/logoutAdmin/adminlogout_service';
//CORE_REFERENCE_IMPORT-adminlogout_api-SSD_SERVICE_ID_sd_iCtuAX3w9gag6hBo
import { adminlogout_api as SSD_SERVICE_ID_sd_iCtuAX3w9gag6hBo } from './sd-services/logoutAdmin/adminlogout_api';
//CORE_REFERENCE_IMPORT-adminlogin_service-SSD_SERVICE_ID_sd_kE8sBPGgod5uFXAp
import { adminlogin_service as SSD_SERVICE_ID_sd_kE8sBPGgod5uFXAp } from './sd-services/loginAdmin/adminlogin_service';
//CORE_REFERENCE_IMPORT-adminlogin_api-SSD_SERVICE_ID_sd_wtugQjf3NWqYQGPV
import { adminlogin_api as SSD_SERVICE_ID_sd_wtugQjf3NWqYQGPV } from './sd-services/loginAdmin/adminlogin_api';

export const UserRoutes = [
    //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-getEmployees-SSD_SERVICE_ID_sd_Dtowk1XP7ZlFbL53
SSD_SERVICE_ID_sd_Dtowk1XP7ZlFbL53,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-pre_middleware-SSD_SERVICE_ID_sd_2BP2OhXJb0SjyHpQ
SSD_SERVICE_ID_sd_2BP2OhXJb0SjyHpQ,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-adminlogout_service-SSD_SERVICE_ID_sd_juY1oS6MqeJWXzjo
SSD_SERVICE_ID_sd_juY1oS6MqeJWXzjo,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-adminlogout_api-SSD_SERVICE_ID_sd_iCtuAX3w9gag6hBo
SSD_SERVICE_ID_sd_iCtuAX3w9gag6hBo,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-adminlogin_service-SSD_SERVICE_ID_sd_kE8sBPGgod5uFXAp
SSD_SERVICE_ID_sd_kE8sBPGgod5uFXAp,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-adminlogin_api-SSD_SERVICE_ID_sd_wtugQjf3NWqYQGPV
SSD_SERVICE_ID_sd_wtugQjf3NWqYQGPV,
];
