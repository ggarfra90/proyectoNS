<html lang="es">
    <head>
        <link href="vistas/libs/imagina/assets/toggles/toggles.css" rel="stylesheet" />
        
  
    </head>

    <body>

        <div class="row">

            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Valoración de riesgos</h3>
                    </div>
                    <div class="panel-body text-center">
                        <div class="row">
                            <div class="col-md-3 text-center">
                               
                                <h5>Significancia</h5>
                               
                                    <div id="tgRiesgoBajo" class="toggle toggle-success"></div>
                                    <input type="hidden" id="txtBajo" value="0"/>
                               
                                <div class="row">
                                <h5>Riesgo bajo hasta</h5>
                                <input type="text" class="knob" data-width="150"  id="txtRiesgoBajo"  data-fgColor="#33b86c" value="0"/>
                                </div>
                               
                            </div>
                            <div class="col-md-3 text-center">
                                <h5>Significancia</h5>
                                <div id="tgRiesgoMedio" class="toggle toggle-warning"></div>
                                 <input type="hidden" id="txtMedio" value="0"/>
                                <div class="row">
                                <h5>Riesgo medio hasta</h5>
                                <input type="text" class="knob" data-cursor=false data-width="150" id="txtRiesgoMedio" data-fgColor="#ebc142" value="0"/>
                            </div>
                            </div>
                            <div class="col-md-3 text-center">
                                <h5>Significancia</h5>
                                <div id="tgRiesgoAlto"class="toggle toggle-serious"></div>
                                 <input type="hidden" id="txtAlto" value="0"/>
                                 <div class="row">
                                <h5>Riesgo alto hasta</h5>
                                <input type="text" class="knob" data-width="150" id="txtRiesgoAlto" data-fgColor="#ff9b3f" value="0"/>
                            </div>
                            </div>
                            <div class="col-md-3">
                                <h5>Significancia</h5>
                                <div id="tgRiesgoCritico" class="toggle toggle-danger"></div>
                                 <input type="hidden" id="txtCritico" value="0"/>
                                <div class="row">
                                <h5>Riesgo crítico desde</h5>
                                <input type="text" class="knob" data-width="150" id="txtRiesgoCritico" data-fgColor="#cb2a2a" value="0"/>
                            </div>
                            </div>
                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <a href="iperEvalRiesgo.html" class="btn btn-info w-sm m-b-5" id="id" style="border-radius: 0px;"><i class="fa fa-close"></i> Cancelar</a>&nbsp;&nbsp;&nbsp;
                            <button type="button" name="btnGuardar" id="btnGuardar" class="btn btn-info w-sm m-b-5" style="border-radius: 0px;" onclick="crearValorRiesgo();"><i class="fa fa-send-o"></i> Enviar</button>&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>

        </div>



 

         <script src="vistas/libs/imagina/assets/toggles/toggles.min.js"></script>
          <script src="vistas/libs/imagina/assets/jquery-knob/jquery.knob.js"></script>
        <script src="vistas/com/iper/iperValoracion_form.js"></script>
    </body>
</html>

