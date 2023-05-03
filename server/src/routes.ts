//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-addProduct_service-SSD_SERVICE_ID_sd_xbNeNUCGJ7jhR2iZ
import { addProduct_service as SSD_SERVICE_ID_sd_xbNeNUCGJ7jhR2iZ } from './sd-services/adminAddProduct/addProduct_service';
//CORE_REFERENCE_IMPORT-adminLogin_service-SSD_SERVICE_ID_sd_oZYnKtIC90NGL7Si
import { adminLogin_service as SSD_SERVICE_ID_sd_oZYnKtIC90NGL7Si } from './sd-services/adminLogin/adminLogin_service';
//CORE_REFERENCE_IMPORT-adminLogin_api-SSD_SERVICE_ID_sd_7PEQ6IKkw8FKDYw7
import { adminLogin_api as SSD_SERVICE_ID_sd_7PEQ6IKkw8FKDYw7 } from './sd-services/adminLogin/adminLogin_api';
//CORE_REFERENCE_IMPORT-employee_pre_middleware-SSD_SERVICE_ID_sd_NJpEskIDhFARMgn5
import { employee_pre_middleware as SSD_SERVICE_ID_sd_NJpEskIDhFARMgn5 } from './sd-services/middlewares/employee_pre_middleware';
//CORE_REFERENCE_IMPORT-employeeLogout_service-SSD_SERVICE_ID_sd_lAeWa0tygE9cdTuP
import { employeeLogout_service as SSD_SERVICE_ID_sd_lAeWa0tygE9cdTuP } from './sd-services/employeeLogout/employeeLogout_service';
//CORE_REFERENCE_IMPORT-employeeLogout_api-SSD_SERVICE_ID_sd_6ZMBFIN51dlDTZmq
import { employeeLogout_api as SSD_SERVICE_ID_sd_6ZMBFIN51dlDTZmq } from './sd-services/employeeLogout/employeeLogout_api';
//CORE_REFERENCE_IMPORT-employeeLogin_service-SSD_SERVICE_ID_sd_taqdi2Cq0OCADEjU
import { employeeLogin_service as SSD_SERVICE_ID_sd_taqdi2Cq0OCADEjU } from './sd-services/employeeLogin/employeeLogin_service';
//CORE_REFERENCE_IMPORT-employeeLogin_api-SSD_SERVICE_ID_sd_JBSoGI8HE5Fr9gcq
import { employeeLogin_api as SSD_SERVICE_ID_sd_JBSoGI8HE5Fr9gcq } from './sd-services/employeeLogin/employeeLogin_api';
//CORE_REFERENCE_IMPORT-employee_service-SSD_SERVICE_ID_sd_Te4AVcqMelS1ePBw
import { employee_service as SSD_SERVICE_ID_sd_Te4AVcqMelS1ePBw } from './sd-services/addEmployee/employee_service';
//CORE_REFERENCE_IMPORT-employee_api-SSD_SERVICE_ID_sd_McGUtddU5PNAq1pz
import { employee_api as SSD_SERVICE_ID_sd_McGUtddU5PNAq1pz } from './sd-services/addEmployee/employee_api';

//CORE_REFERENCE_IMPORT-api-SSD_SERVICE_ID_sd_znQocInVjaH22QnE

import { api as SSD_SERVICE_ID_sd_znQocInVjaH22QnE } from './sd-services/sentPaymentLink/api';

//CORE_REFERENCE_IMPORT-order_api-SSD_SERVICE_ID_sd_kgQ7erhXW7NIRdnJ

import { order_api as SSD_SERVICE_ID_sd_kgQ7erhXW7NIRdnJ } from './sd-services/order/order_api';

//CORE_REFERENCE_IMPORT-order_service-SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAd

import { order_service as SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAd } from './sd-services/order/order_service';

//CORE_REFERENCE_IMPORT-service-SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomF

import { service as SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomF } from './sd-services/addCoupon/service';

//CORE_REFERENCE_IMPORT-api-SSD_SERVICE_ID_sd_nHh3CKHPXXm3P2MW

import { api as SSD_SERVICE_ID_sd_nHh3CKHPXXm3P2MW } from './sd-services/addCoupon/api';



export const UserRoutes = [

//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-addProduct_service-SSD_SERVICE_ID_sd_xbNeNUCGJ7jhR2iZ
SSD_SERVICE_ID_sd_xbNeNUCGJ7jhR2iZ,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-adminLogin_service-SSD_SERVICE_ID_sd_oZYnKtIC90NGL7Si
SSD_SERVICE_ID_sd_oZYnKtIC90NGL7Si,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-adminLogin_api-SSD_SERVICE_ID_sd_7PEQ6IKkw8FKDYw7
SSD_SERVICE_ID_sd_7PEQ6IKkw8FKDYw7,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employee_pre_middleware-SSD_SERVICE_ID_sd_NJpEskIDhFARMgn5
SSD_SERVICE_ID_sd_NJpEskIDhFARMgn5,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employeeLogout_service-SSD_SERVICE_ID_sd_lAeWa0tygE9cdTuP
SSD_SERVICE_ID_sd_lAeWa0tygE9cdTuP,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employeeLogout_api-SSD_SERVICE_ID_sd_6ZMBFIN51dlDTZmq
SSD_SERVICE_ID_sd_6ZMBFIN51dlDTZmq,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employeeLogin_service-SSD_SERVICE_ID_sd_taqdi2Cq0OCADEjU
SSD_SERVICE_ID_sd_taqdi2Cq0OCADEjU,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employeeLogin_api-SSD_SERVICE_ID_sd_JBSoGI8HE5Fr9gcq
SSD_SERVICE_ID_sd_JBSoGI8HE5Fr9gcq,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employee_service-SSD_SERVICE_ID_sd_Te4AVcqMelS1ePBw
SSD_SERVICE_ID_sd_Te4AVcqMelS1ePBw,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-employee_api-SSD_SERVICE_ID_sd_McGUtddU5PNAq1pz
SSD_SERVICE_ID_sd_McGUtddU5PNAq1pz,

//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-api-SSD_SERVICE_ID_sd_znQocInVjaH22QnE

SSD_SERVICE_ID_sd_znQocInVjaH22QnE,

//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-order_api-SSD_SERVICE_ID_sd_kgQ7erhXW7NIRdnJ

SSD_SERVICE_ID_sd_kgQ7erhXW7NIRdnJ,

//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-order_service-SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAd

SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAd,

//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-service-SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomF

SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomF,

//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-api-SSD_SERVICE_ID_sd_nHh3CKHPXXm3P2MW

SSD_SERVICE_ID_sd_nHh3CKHPXXm3P2MW,

];

