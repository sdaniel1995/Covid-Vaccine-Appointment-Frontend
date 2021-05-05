import axios from 'axios'

const APT_REST_API_URL = 'http://localhost:8081/api/appointments/distributor/1'


class AppointmentService{

    getAppointments(){
       return axios.get(APT_REST_API_URL);
    }
}

export default new AppointmentService();