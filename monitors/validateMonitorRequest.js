import { createMonitor } from "./monitorsController.js";

export default function validateMonitorRequest(request,response){
    createMonitor(request,response)
}
