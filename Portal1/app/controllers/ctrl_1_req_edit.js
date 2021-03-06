module1.controller('ctrl_1_req_edit', [ 'service1_ctrl_1', 'service_getter_setter1', '$modalInstance', '$scope', '$http', 'service_t_requestor', 'service1_vm_ds_pl', 'service1_storage_pl', function (service1_ctrl_1, service_getter_setter1, $modalInstance, $scope, $http, service_t_requestor, service1_vm_ds_pl, service1_storage_pl) {



    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');

    };


    service_t_requestor.success().then(function (data_service_t_requestor) {
        $scope.data_service_t_requestor = data_service_t_requestor
    });


    service1_vm_ds_pl.success().then(function (data_vm_ds) {
        $scope.data_vm_ds = data_vm_ds;
        $scope.prograssing_vm_ds = true;
    });


    $scope.fn_clear_vm_name_input = function() {

        $scope.update_entry_data.vm_name_input = "";
        $scope.update_entry_data.snap_input = undefined;
        $scope.data_storage = undefined;

    };

    $scope.fn_clear_owner_restore_input = function() {

        $scope.update_entry_data.owner_restore_input = "";

    };


    $scope.fn_change_vm_name_input = function() {

        $scope.update_entry_data.snap_input = undefined;
        $scope.data_storage = undefined;

    };


    $scope.prograssing_storage_pl = false;

    $scope.fn_data_vm_ds_data_storage = function(data_update_entry_data) {
        $scope.prograssing_storage_pl = true;

        service1_storage_pl.success(data_update_entry_data.vm_name_input.vm_ds).then(function (data_storage) {
            $scope.data_storage = data_storage;
            $scope.prograssing_storage_pl = false;
        });

    };


    $scope.data = [ $scope.id=service_getter_setter1.id, $scope.vm_name=service_getter_setter1.vm_name, $scope.vm_ds=service_getter_setter1.vm_ds, $scope.vol_name=service_getter_setter1.vol_name, $scope.snap_name=service_getter_setter1.snap_name, $scope.snap_date=service_getter_setter1.snap_date, $scope.requestor_name=service_getter_setter1.requestor_name, $scope.requestor_email=service_getter_setter1.requestor_email, $scope.owner=service_getter_setter1.owner ];


    $scope.fn_req_edit= function (id,data) {

        var config = {
            params: {
                id               : id,
                update_entry_data: data
            }
        };

        $http.post("php/service1_ctrl_1_req_edit.php", null, config).success(function(http_response) {

            if (http_response.msg) {
                var data_to_ctrl_1 = http_response.msg;

            }

            $modalInstance.close(data_to_ctrl_1);

        });

    };




}]);
