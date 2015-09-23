/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    limpiaEspacio();
    altura();
});
$(document).ready(function () {
    loaderShow(null);
    ax.setSuccess("exitoIper");
    ax.setAccion("configuracionesIniciales");
    ax.consumir();
    cargarComponentes();
    altura();
});
function cargarElementosData(data) {
                  loaderClose();  
                cargarSituacionTemporal(data.situacionTemporal);
                cargarTipoActividad(data.tipoActividad);
                cargarProbabilidad(data.probabilidad);
                cargarExposicion(data.exposicion);
                cargarSeveridad(data.severidad);
                 cargarReqLegales(data.listarReqLegales);
                 cargarMedControl(data.istarMedControl);
                 cargarPeligro(data.listarPeligro);
                 cargarPelConsecuencias(data.listarPelConsecuencias);
                 
}

function probAct() {
    var probActual = 1;
probActual=1;
    var problVal = $('#cboSituacionPro option:selected').text();
    var valPro=$('#cboSituacionPro').val(); 
    if (!isEmpty(valPro)) {
        probActual = problVal;
    }
    return probActual;
}
function expAct() {
    var expActual = 1;
    expActual=1;
    var expVal = $('#cboSituacionExp option:selected').text();
    var valExp=$('#cboSituacionExp').val();
    if (!isEmpty(valExp)) {
        expActual = expVal;
    }
    return expActual;
}
function sevAct() {
    var sevActual;
    sevActual= 1;

    var sevVal = $('#cboSituacionSev option:selected').text();
    var valSev = $('#cboSituacionSev').val();
    if (!isEmpty(valSev)) {
        sevActual = sevVal;
    }
    return sevActual;
}
function probMedAct() {
    var probActual = 1;
probActual=1;
    var problVal = $('#cboMedidasPro option:selected').text();
    var valPro=$('#cboMedidasPro').val(); 
    if (!isEmpty(valPro)) {
        probActual = problVal;
    }
    return probActual;
}
function expMedAct() {
    var expActual = 1;
    expActual=1;
    var expVal = $('#cboMedidasExp option:selected').text();
    var valExp=$('#cboMedidasExp').val();
    if (!isEmpty(valExp)) {
        expActual = expVal;
    }
    return expActual;
}
function sevMedAct() {
    var sevActual;
    sevActual= 1;

    var sevVal = $('#cboMedidasSev option:selected').text();
    var valSev = $('#cboMedidasSev').val();
    if (!isEmpty(valSev)) {
        sevActual = sevVal;
    }
    return sevActual;
}
$("#cboSituacionPro").change(function () {
   var resultado = 1;
   resultado=obtenerSignificancia();
    $("#txtSituacionSig").val(resultado.toFixed(2));

});
$("#cboSituacionExp").change(function () {
   var resultado = 1;
   resultado=obtenerSignificancia();
    $("#txtSituacionSig").val(resultado);
});
$("#cboSituacionSev").change(function () {
   
    var resultado = 1;
   resultado=obtenerSignificancia();
    $("#txtSituacionSig").val(resultado);
});
$("#cboMedidasPro").change(function () {
   var resultado = 1;
   resultado=obtenerSignificanciaMed();
    $("#txtMedidasSig").val(resultado.toFixed(2));

});
$("#cboMedidasExp").change(function () {
   var resultado = 1;
   resultado=obtenerSignificanciaMed();
    $("#txtMedidasSig").val(resultado);
});
$("#cboMedidasSev").change(function () {
   
    var resultado = 1;
   resultado=obtenerSignificanciaMed();
    $("#txtMedidasSig").val(resultado);
});
function obtenerSignificancia(){
     var pro = 1;
    var exp = 1;
    var sev = 1;
    var resultado = 1;
    pro = probAct();
    exp = expAct();
    sev = sevAct();
    resultado = parseFloat(pro) * parseFloat(exp) * parseFloat(sev);
    return resultado;
}
function obtenerSignificanciaMed(){
     var pro = 1;
    var exp = 1;
    var sev = 1;
    var resultado = 1;
    pro = probMedAct();
    exp = expMedAct();
    sev = sevMedAct();
    resultado = parseFloat(pro) * parseFloat(exp) * parseFloat(sev);
    return resultado;
}
function exitoIper(response) {
    if (response.status === 'ok') {
        switch (response[PARAM_ACCION_NAME]) {
            case 'configuracionesIniciales':
                cargarElementosData(response.data);
                break;
            case 'obtenerPuesto':
                 cargarGerenciaLegado(response.data);
              
                break;
                 case 'obtenerGerenciaLegado':
                 cargarGerenciaLegado(response.data);
                
                break;

            case 'cambiarEstado':
                cambiarIconoEstado();
                break;
            
        }
    }
}
function obtenerGerenciaLegado() {
    ax.setAccion("obtenerGerenciaLegado");
    ax.consumir();
}

function cargarComponentes() {
    cargarSelect2();
}

function cargarSelect2() {

    $("#cboGerencia").select2({
        width: '100%'
    });
    $("#cboPuesto").select2({
        width: '100%'
    });
    $("#cboActividad").select2({
        width: '100%'
    });
    $('#txtActividad').tagsInput({
        width: 'auto',
        height: 'auto',
        defaultText: 'Otras...'

    });
    $("#cboDescripcionPel").select2({
        width: '100%'

    });
    $('#txtDescripcionPel').tagsInput({
        width: 'auto',
        height: 'auto',
        defaultText: 'Otras...'

    });
    $("#cboConsecuenciaPel").select2({
        width: '100%'

    });
    $('#txtConsecuenciaPel').tagsInput({
        width: 'auto',
        height: 'auto',
        defaultText: 'Otras...'

    });

    $("#cboSituacionTem").select2({
        width: '100%'
    });
    $("#cboSituacionTipAct").select2({
        width: '100%'
    });
    $("#cboSituacionReqLeg").select2({
        width: '100%'
    });
    $('#txtSituacionReqLeg').tagsInput({
        width: 'auto',
        height: 'auto',
        defaultText: 'Otras...'

    });
    $("#cboSituacionMedExi").select2({
        width: '100%'
    });
    $('#txtSituacionMedExi').tagsInput({
        width: 'auto',
        height: 'auto',
        defaultText: 'Otras...'

    });
    $("#cboSituacionPro").select2({
        width: '100%'
    });
    $("#cboSituacionExp").select2({
        width: '100%'
    });
    $("#cboSituacionSev").select2({
        width: '100%'
    });
    $("#cboSituacionAct").select2({
        width: '100%'
    });




    $("#cboMedidasSisBlo").select2({
        width: '100%'
    });
    $('#txtMedidasSisBlo').tagsInput({
        width: 'auto',
        height: 'auto',
        defaultText: 'Otras...'

    });
    $("#cboMedidasEquiTec").select2({
        width: '100%'
    });
    $('#txtMedidasEquiTec').tagsInput({
        width: 'auto',
        height: 'auto',
        defaultText: 'Otras...'

    });
    $("#cboMedidasMonMan").select2({
        width: '100%'
    });
    $('#txtMedidasMonMan').tagsInput({
        width: 'auto',
        height: 'auto',
        defaultText: 'Otras...'

    });
    $("#cboMedidasEntPer").select2({
        width: '100%'
    });
    $('#txtMedidasEntPer').tagsInput({
        width: 'auto',
        height: 'auto',
        defaultText: 'Otras...'

    });
    $("#cboMedidasElaPro").select2({
        width: '100%'
    });
    $("#cboMedidasPro").select2({
        width: '100%'
    });
    $("#cboMedidasExp").select2({
        width: '100%'
    });
    $("#cboMedidasSev").select2({
        width: '100%'
    });


}
function cargarGerenciaLegado(data) {
    $.each(data, function (index, item) {
        $('#cboGerencia').append('<option value="' + item.idgrupotrabajo + '">' + item.descripcion + '</option>');
    });
}
function cargarSituacionTemporal(data) {
    $.each(data, function (index, item) {
        $('#cboSituacionTem').append('<option value="' + item.codigo + '">' + item.descripcion + '</option>');
    });
}
function cargarTipoActividad(data) {
    $.each(data, function (index, item) {
        $('#cboSituacionTipAct').append('<option value="' + item.codigo + '">' + item.descripcion + '</option>');
    });
}
function cargarProbabilidad(data) {
    $.each(data, function (index, item) {
        $('#cboSituacionPro').append('<option value="' + item.codigo + '">' + item.descripcion + '</option>');
        $('#cboMedidasPro').append('<option value="' + item.codigo + '">' + item.descripcion + '</option>');

    });
}
function cargarExposicion(data) {
    $.each(data, function (index, item) {
        $('#cboSituacionExp').append('<option value="' + item.codigo + '">' + item.descripcion + '</option>');
        $('#cboMedidasExp').append('<option value="' + item.codigo + '">' + item.descripcion + '</option>');
    });
}
function cargarSeveridad(data) {
    $.each(data, function (index, item) {
        $('#cboSituacionSev').append('<option value="' + item.codigo + '">' + item.descripcion + '</option>');
        $('#cboMedidasSev').append('<option value="' + item.codigo + '">' + item.descripcion + '</option>');
    });
}
function cargarReqLegales(data) {
    $.each(data, function (index, item) {
        $('#cboSituacionReqLeg').append('<option value="' + item.id + '">' + item.descripcion + '</option>');
    });
}
function cargarMedControl(data) {
    $.each(data, function (index, item) {
        $('#cboSituacionMedExi').append('<option value="' + item.id + '">' + item.descripcion + '</option>');
        $('#cboMedidasEquiTec').append('<option value="' + item.id + '">' + item.descripcion + '</option>');
        $('#cboMedidasMonManp').append('<option value="' + item.id + '">' + item.descripcion + '</option>');
       $('#cboMedidasSisBlo').append('<option value="' + item.id + '">' + item.descripcion + '</option>');
       $('#cboMedidasEntPer').append('<option value="' + item.id + '">' + item.descripcion + '</option>');
        $('#cboMedidasElaPro').append('<option value="' + item.id + '">' + item.descripcion + '</option>');
});
}
function cargarPeligro(data) {
    $.each(data, function (index, item) {
        $('#cboDescripcionPel').append('<option value="' + item.id + '">' + item.descripcion + '</option>');
    });
}
function cargarPelConsecuencias(data) {
    $.each(data, function (index, item) {
        $('#cboConsecuenciaPel').append('<option value="' + item.id + '">' + item.descripcion + '</option>');
    });
   
}

function cargarPantallaListarIper() {
   
    var url = URL_BASE + "vistas/com/iper/iper.php";
    cargarDiv("#window", url);
}


function cambiarEstado(id) {
    loaderShow(null);
    var estado = document.getElementById('h' + id).value;
    ax.setAccion("cambiarEstado");
    ax.addParamTmp("id", id);
    ax.addParamTmp("estado", estado);
    ax.consumir();
}

function cambiarIconoEstado() {
    $.Notification.autoHideNotify('success', 'top-right', '&Eacute;xito', 'Estado actualizado');
    listarIper();
}

