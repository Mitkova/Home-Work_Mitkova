

function ApiService() {
    this.baseUrl = "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json";
    
    // api calls
    this.searchByName = function (name) {
        let url = `${this.baseUrl}name/${name}`;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function (response) {
                    resolve(response);
                },
                error: function (error) {
                    reject(error);
                }
            })
        });
    };