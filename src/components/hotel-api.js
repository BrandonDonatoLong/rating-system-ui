/**
 * Created by Brandon on 7/7/2017.
 */
export default class API {
    static prefix = '/api';

    static uri = 'http://192.168.1.50:8080';

    static get(path, querystring){
        let url = `${ this.uri }${ this.prefix }` + path + (querystring ? querystring : '');
        return fetch(url)
            .then((response)=> response.json())
            .catch((error) => {
                console.error(error);
            });
    }
};