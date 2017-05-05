export var html = '﻿﻿<div class="svd_container" >    <ul class="navbar-default container-fluid nav nav-tabs svd_menu header">        <li style="float: left;color:white;font-size: 20px;font-family: \'微软雅黑\', serif;padding: 5px;"  id="surveyname"> </li>        <li style="float: left;color:white;font-size: 20px;font-family: \'微软雅黑\', serif;padding: 5px;"  id="surveypublishVersion"></li>        <li data-bind="visible: showEmbededSurveyTab, css: {active: koViewType() == \'embed\'}"><a href="#"                                                                                                 data-bind="click:selectEmbedClick, text: $root.getLocString(\'ed.embedSurvey\')"></a>        </li>        <!-- <li class="svd_actions" data-bind="visible: koIsShowDesigner">             <button type="button" class="btn btn-primary" data-bind="enable:undoRedo.koCanUndo, click: doUndoClick"><span data-bind="text: $root.getLocString(\'ed.undo\')"></span></button>         </li>         <li class="svd_actions" data-bind="visible: koIsShowDesigner">             <button type="button" class="btn btn-primary" data-bind="enable:undoRedo.koCanRedo, click: doRedoClick"><span data-bind="text: $root.getLocString(\'ed.redo\')"></span></button>         </li>-->        <li class="svd_actions" data-bind="visible: (koIsShowDesigner() && koShowOptions())">            <div class="btn-group inline">                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"                        aria-haspopup="true" aria-expanded="false" data-bind="text: $root.getLocString(\'ed.options\')">                    Options                    <span class="caret"></span>                </button>                <ul class="dropdown-menu">                    <li data-bind="css: {active: koGenerateValidJSON}"><a href="#"                                                                          data-bind="click:generateValidJSONClick, text: $root.getLocString(\'ed.generateValidJSON\')"></a>                    </li>                </ul>            </div>        </li>        <div class="button-group">            <ul id="BUTTONEXIT" style="display: none">                <li id="EXITPREVIEW" data-bind="css: {active: koViewType() == \'designer\'},click:selectDesignerClick">                    <img src="images/index_icon/fbIcon.svg" alt=""/>退出                </li>            </ul>            <ul id="BUTTONGROUP" style="margin-right:\'200px\' ;  ">                <li data-bind="visible: showJSONEditorTab, css: {active: koViewType() == \'editor\'}"                    style="width:100px;text-align:center;"><a href="#"                                                              data-bind="click:selectEditorClick, text: $root.getLocString(\'ed.jsonEditor\')"                                                              style="color:#fff"></a></li>                <li data-bind="css: {active: koViewType() == \'designer\'},click:selectDesignerClick"><img                        src="images/index_icon/setIcon.svg" style="margin: 6px 10px;" alt=""/>设置                </li>                <li id="PREVIEW" data-bind="visible: showTestSurveyTab,click:selectTestClick"><img                        src="images/index_icon/ylIcon.svg" style="margin: 8px 10px;" alt=""/>预览                </li>                <li data-bind="click:putPublishClick"><img src="images/index_icon/fbIcon.svg" alt=""/>发布</li>                <li data-bind="event:{click: function(el, e){$root.saveEditorClick(); }}"><img                        src="images/index_icon/fbIcon.svg" alt=""/>保存                </li>            </ul>        </div>        <!-- <li class="svd_actions" data-bind="visible: koViewType() == \'test\'">             <div class="btn-group inline">                 <button type="button" id="surveyTestWidth" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">                     <span data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \' \' + $root.koTestSurveyWidth()"></span>                     <span class="caret"></span>                 </button>                 <ul class="dropdown-menu" aria-labelledby="surveyTestWidth">                     <li><a href="#" data-bind="click: koTestSurveyWidth.bind($data, \'100%\')">100%</a></li>                     <li><a href="#" data-bind="click: koTestSurveyWidth.bind($data, \'1200px\')">1200px</a></li>                     <li><a href="#" data-bind="click: koTestSurveyWidth.bind($data, \'1000px\')">1000px</a></li>                     <li><a href="#" data-bind="click: koTestSurveyWidth.bind($data, \'800px\')">800px</a></li>                     <li><a href="#" data-bind="click: koTestSurveyWidth.bind($data, \'600px\')">600px</a></li>                     <li><a href="#" data-bind="click: koTestSurveyWidth.bind($data, \'400px\')">400px</a></li>                 </ul>             </div>         </li>-->        <ul id="PREVIEWGROUP" class="nav nav-tabs" style="display: none">            <li id="PCTAB" style="margin-right:500px; margin-top:10px; " class="active"><a id="PC" href="#1" style="background-color:  #DDDDDD; "                                                                                           data-toggle="tab">电脑端</a>            </li>            <!--  <li id="PADTAB" style="margin-top:10px;"><a id="PAD" href="#2" data-toggle="tab">移动端</a></li> -->            <li id="PADTAB" style="margin-top:10px;"><a id="PAD" onClick="ipadyl();">移动端</a></li>        </ul>        <li class="svd_actions">            <button type="button" class="btn btn-primary svd_save_btn"                    data-bind="click: saveButtonClick, visible: koShowSaveButton"><span                    data-bind="text: $root.getLocString(\'ed.saveSurvey\')"></span></button>        </li>    </ul>    <div class="panel svd_content grid-c3">        <!-- ko if: koViewType() !== \'test\' && koViewType() !==\'editor\'-->        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 panel panel-default svd_toolbox  col-extra flr">            <div id="crys_list" style="padding-right:2px">                <ul class="main">                    <!-- ko foreach: questionTypes -->                    <li style="text-align:left; margin:1px;width:100%" draggable="true"                        data-bind="click: $parent.clickQuestion, event:{dragstart: function(el, e) { $parent.draggingQuestion($data, e); return true;}, dragend: function(el, e) { $parent.dragEnd(); }}">                        <span data-bind="css: \'icon-\' + $data"></span>                        <span class="svd_toolbox_item_text" data-bind="text: $root.getLocString(\'qt.\' + $data)"></span>                    </li>                    <!-- /ko  -->                    <li style="text-align:left; margin:1px;width:100%" id="cystk">                        <span class="cystk"></span>                        <span class="svd_toolbox_item_text">常用试题库</span>                        <ul class="tccy" id="tccy">                            <li><span></span>姓名</li>                            <li><span></span>性别</li>                            <li><span></span>出生日期</li>                            <li><span></span>居住地址</li>                            <li><span></span>婚姻状况</li>                            <li><span></span>地址</li>                            <li><span></span>联系人姓名</li>                            <li><span></span>联系人手机</li>                        </ul>                    </li>                </ul>                <!-- ko foreach: koCopiedQuestions -->                <!--  <div class="btn btn-default" style="text-align:left; margin:1px;width:100%" draggable="true" data-bind="click: $parent.clickCopiedQuestion, event:{dragstart: function(el, e) { $parent.draggingCopiedQuestion($data, e); return true;}, dragend: function(el, e) { $parent.dragEnd(); }}">                      <span class="icon-default"></span>                      <span class="svd_toolbox_item_text" data-bind="text:name"></span>                  </div>-->                <!-- /ko  -->            </div>        </div>        <!-- /ko -->        <div class="row svd_survey_designer col-main" data-bind="visible: koViewType() == \'designer\'">            <div class="col-lg-71 col-md-7 col-sm-12 col-xs-12 svd_editors main-wrap fll">                <div class="svd_pages_editor" data-bind="template: { name: \'pageeditor\', data: pagesEditor }"></div>                <div class="svd_questions_editor" id="scrollableDiv">                    <div id="surveyjs"></div>                </div>            </div>            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 panel panel-default svd_properties right_proper">                <div class="panel-heading input-group">                    <div class="custom-select">                        <select class="form-control"                                data-bind="options: koObjects, optionsText: \'text\', value: koSelectedObject"></select>                    </div>                    <div class="input-group-btn">                        <button class="btn btn-default" type="button"                                data-bind="enable: koCanDeleteObject, click: deleteCurrentObject, attr: { title: $root.getLocString(\'ed.delSelObject\')}">                            <span class="glyphicon glyphicon-remove"></span></button>                    </div>                </div>                <div data-bind="template: { name: \'objecteditor\', data: selectedObjectEditor }"></div>                <div class="panel-footer" data-bind="visible:surveyVerbs.koHasVerbs">                    <div data-bind="template: { name: \'objectverbs\', data: surveyVerbs }"></div>                </div>            </div>        </div>        <div data-bind="visible: koViewType() == \'editor\'">            <div data-bind="template: { name: \'jsoneditor\', data: jsonEditor }"></div>        </div>        <div id="surveyjsTest" class="pc " data-bind="visible: koViewType() == \'test\'">            <div id="surveyjsExample"></div>            <div id="surveyjsExampleResults"></div>            <button id="surveyjsExamplereRun"                    data-bind="click:selectTestClick, text: $root.getLocString(\'ed.testSurveyAgain\')"                    style="display:none">Test Again            </button>        </div>        <div id="surveyjsEmbed" data-bind="visible: koViewType() == \'embed\'">            <div data-bind="template: { name: \'surveyembeding\', data: surveyEmbeding }"></div>        </div>    </div></div><script type="text/javascript">    var ipadyl = function () {        window.location.href = \'../src/pages/ipad_yl/index.html\';    };</script><script type="text/html" id="jsoneditor">    <div data-bind="visible: !hasAceEditor">        <textarea class="svd_json_editor_area" data-bind="textInput:koText" style="width:66%;height:600px;"></textarea>        <!-- ko foreach: koErrors -->        <div>            <span>Error: </span><span data-bind="text: text"></span>        </div>        <!-- /ko  -->    </div>    <div id="surveyjsJSONEditor" class="svd_json_editor"></div></script><script type="text/html" id="objecteditor">    <table class="table svd_table-nowrap">        <tbody data-bind="foreach: koProperties">            <tr data-bind="click: $parent.changeActiveProperty($data), css: {\'active\': $parent.koActiveProperty() == $data}">                <td data-bind="text: cnName, attr: {title: title}" width="50%"></td>                <td width="50%">                    <span data-bind="text: koText, visible: $parent.koActiveProperty() != $data && (koText() || $data.editorType == \'boolean\'), attr: {title: koText}" style="text-overflow:ellipsis;white-space:nowrap;overflow:hidden"></span>                    <div data-bind="visible: $parent.koActiveProperty() == $data || (!koText() && $data.editorType != \'boolean\')">                        <!-- ko template: { name: \'propertyeditor-\' + editorType, data: $data } -->                        <!-- /ko -->                    </div>                </td>            </tr>        </tbody>    </table></script><script type="text/html" id="objectverbs">    <!-- ko foreach: koVerbs -->        <div class="row">            <div class="input-group">                <span  class="input-group-addon" data-bind="text:text"></span>                <select class="form-control" data-bind="options: koItems, optionsText: \'text\', optionsValue:\'value\', value: koSelectedItem"></select>            </div>        </div>    <!-- /ko  --></script><script type="text/html" id="pageeditor">    <ul class="nav nav-tabs nav_main" data-bind="tabs:true">        <!-- ko foreach: koPages -->        <li data-bind="css: {active: koSelected()},event:{           keydown:function(el, e){ $parent.keyDown(el, e); },           dragstart:function(el, e){ $parent.dragStart(el); return true; },           dragover:function(el, e){ $parent.dragOver(el);},           dragend:function(el, e){ $parent.dragEnd();},           drop:function(el, e){ $parent.dragDrop(el);}         }">             <a class="svd_page_nav" href="#" data-bind="click:$parent.selectPageClick">                <span data-bind="text: title"></span>            </a>        </li>        <!-- /ko  -->        <li><span class="svd_add_new_page_btn" data-bind="click:addNewPageClick" ></span></li>        <!--<li><button class="btn btn-default svd_add_new_page_btn" data-bind="click:addNewPageClick"><span class="glyphicon glyphicon-plus"></span></button></li>-->    </ul></script><script type="text/html" id="surveyembeding">    <div class="row">        <select data-bind="value:koLibraryVersion">            <option value="knockout" data-bind="text: $root.getLocString(\'ew.knockout\')"></option>            <option value="react" data-bind="text: $root.getLocString(\'ew.react\')"></option>        </select>        <select data-bind="value:koScriptUsing">            <option value="bootstrap" data-bind="text: $root.getLocString(\'ew.bootstrap\')"></option>            <option value="standard" data-bind="text: $root.getLocString(\'ew.standard\')"></option>        </select>        <select data-bind="value:koShowAsWindow">            <option value="page" data-bind="text: $root.getLocString(\'ew.showOnPage\')"></option>            <option value="window" data-bind="text: $root.getLocString(\'ew.showInWindow\')"></option>        </select>        <label class="checkbox-inline" data-bind="visible:koHasIds">            <input type="checkbox" data-bind="checked:koLoadSurvey" />            <span data-bind="text: $root.getLocString(\'ew.loadFromServer\')"></span>        </label>    </div>    <div class="panel">        <div class="panel-heading" data-bind="text: $root.getLocString(\'ew.titleScript\')"></div>        <div data-bind="visible:hasAceEditor">            <div id="surveyEmbedingHead" style="height:70px;width:100%"></div>        </div>        <textarea data-bind="visible:!hasAceEditor, text: koHeadText" style="height:70px;width:100%"></textarea>    </div>    <div class="panel" data-bind="visible: koVisibleHtml">        <div class="panel-heading"  data-bind="text: $root.getLocString(\'ew.titleHtml\')"></div>        <div data-bind="visible:hasAceEditor">            <div id="surveyEmbedingBody" style="height:30px;width:100%"></div>        </div>        <textarea data-bind="visible:!hasAceEditor, text: koBodyText" style="height:30px;width:100%"></textarea>    </div>    <div class="panel">        <div class="panel-heading"  data-bind="text: $root.getLocString(\'ew.titleJavaScript\')"></div>        <div data-bind="visible:hasAceEditor">            <div id="surveyEmbedingJava" style="height:300px;width:100%"></div>        </div>        <textarea data-bind="visible:!hasAceEditor, text: koJavaText" style="height:300px;width:100%"></textarea>    </div></script><script type="text/html" id="propertyeditor-boolean">    <input class="form-control" type="checkbox" data-bind="checked: koValue" /></script><script type="text/html" id="propertyeditor-dropdown">    <div class="custom-select">        <select class="form-control" data-bind="event:{blur: function(el, e){if($data.object != undefined){	if($data.object.PageCount != undefined){	var template=JSON.parse(sessionStorage.template);	template[title]=$data.editor.value_;	sessionStorage.template=JSON.stringify(template);	}}}},value: koValue, options: choices"  style="width:100%"></select>    </div></script><script type="text/html" id="propertyeditor-html">    <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-html">    <textarea class="form-control" data-bind="value:koValue" style="width:100%" rows="10" autofocus="autofocus"></textarea></script><script type="text/html" id="propertyeditor-itemvalues">    <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" class="btn-xs" id="propertyeditorcontent-itemvalues">    <div style="margin-bottom:3px">        <button class="btn-xs" data-bind="css: {\'btn btn-primary\':koActiveView() == \'form\', \'btn-link\':koActiveView() != \'form\'}, click:changeToFormViewClick, text: $root.getLocString(\'pe.formEntry\')"></button>        <button class="btn-xs" data-bind="css: {\'btn btn-primary\':koActiveView() != \'form\', \'btn-link\':koActiveView() == \'form\'}, click:changeToTextViewClick, text: $root.getLocString(\'pe.fastEntry\')"></button>    </div>    <div data-bind="visible:koActiveView() == \'form\'" style="overflow-y: auto; overflow-x:hidden; max-height:400px">        <table class="table">            <thead>                <tr>                    <th></th>                    <!--<th data-bind="text: $root.getLocString(\'pe.value\')"></th>-->                    <th data-bind="text: $root.getLocString(\'pe.text\')"></th>                    <th data-bind="text: $root.getLocString(\'pe.score\')"></th>                    <th data-bind="text: $root.getLocString(\'pe.isscore\')"></th>                    <th data-bind="text: $root.getLocString(\'pe.istk\')"></th>                    <th></th>                </tr>            </thead>            <tbody>                <!-- ko foreach: koItems -->                <tr>                    <td>                        <div class="btn-group" role="group">                            <button type="button" class="btn btn-xs" data-bind="visible: $index() > 0, click: $parent.onMoveUpClick"><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></button>                            <button type="button" class="btn btn-xs" style="float:none" data-bind="visible: $index() < $parent.koItems().length - 1, click: $parent.onMoveDownClick"><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></button>                        </div>                    </td>                   <!-- <td>                        <input type="hidden"  class="form-control" data-bind="value:koValue" style="width:200px" />                        <div class="alert alert-danger no-padding" role="alert" data-bind="visible:koHasError, text: $root.getLocString(\'pe.enterNewValue\')"></div>                    </td>-->                    <td><input type="text" class="form-control" data-bind="value:koText" style="width:200px" /></td>                    <td>                        <input type="text" class="form-control" data-bind="value:koScore" style="width:200px" />                    </td>                    <td>                        <input type="checkbox" class="form-control" data-bind="checked:koIsScore" />                    </td>                    <td>                        <input type="checkbox" class="form-control" data-bind="checked:koIsTk" />                    </td>                    <td><button type="button" class="btn btn-xs" data-bind="click: $parent.onDeleteClick"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>                </tr>                <!-- /ko -->            </tbody>        </table>    </div>    <div class="row btn-toolbar" data-bind="visible:koActiveView() == \'form\'">        <input type="button" class="btn btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')" />        <input type="button" class="btn btn-danger" data-bind="click: onClearClick, value: $root.getLocString(\'pe.removeAll\')" />    </div>    <div data-bind="visible:koActiveView() != \'form\'">        <textarea class="form-control" data-bind="textInput: koItemsText"  style="overflow-y: auto; overflow-x:hidden; max-height:400px; min-height:250px; width:100%"></textarea>    </div></script><script type="text/html" id="propertyeditor-matrixdropdowncolumns">    <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-matrixdropdowncolumns">    <table class="table">        <thead>            <tr>                <th data-bind="text: $root.getLocString(\'pe.required\')"></th>                <th data-bind="text: $root.getLocString(\'pe.cellType\')"></th>                <th data-bind="text: $root.getLocString(\'pe.name\')"></th>                <th data-bind="text: $root.getLocString(\'pe.title\')"></th>                <th></th>            </tr>        </thead>        <tbody>            <!-- ko foreach: koItems -->            <tr>                <td>                    <a href="#" data-bind="visible:koHasChoices, click: onShowChoicesClick">                        <span class="glyphicon" data-bind="css: {\'glyphicon-chevron-down\': !koShowChoices(), \'glyphicon-chevron-up\': koShowChoices()}"></span>                    </a>                    <input type="checkbox" data-bind="checked: koIsRequired" />                </td>                <td>                    <select class="form-control" data-bind="options: cellTypeChoices, value: koCellType"  style="width:110px"></select>                </td>                <td>                    <input type="text" class="form-control" data-bind="value:koName" style="width:100px" />                    <div class="alert alert-danger no-padding" role="alert" data-bind="visible:koHasError, text: $root.getLocString(\'pe.enterNewValue\')"></div>                </td>                <td><input type="text" class="form-control" data-bind="value:koTitle" style="width:120px" /></td>                <td><input type="button" class="btn" data-bind="click: $parent.onDeleteClick, value: $root.getLocString(\'pe.delete\')"/></td>            </tr>            <tr data-bind="visible: koShowChoices() && koHasChoices()">                <td colspan="4" style="border-top-style:none">                    <div class="form-group">                        <label class="control-label col-sm-3" data-bind="text:$root.getLocString(\'pe.hasOther\')"></label>                        <div class="col-sm-2">                            <input type="checkbox" data-bind="checked: koHasOther" />                        </div>                        <div class="col-sm-7" data-bind="visible: !koHasColCount()"></div>                        <label class="control-label col-sm-3" data-bind="visible:koHasColCount, text:$root.getLocString(\'pe.colCount\')"></label>                        <select class="form-control col-sm-4" data-bind="visible:koHasColCount, options: colCountChoices, value: koColCount" style="width:110px"></select>                    </div>                    <div class="modal-body svd_notopbottompaddings">                        <!-- ko template: { name: \'propertyeditorcontent-itemvalues\', data: choicesEditor } -->                        <!-- /ko -->                    </div>                </td>            </tr>            <!-- /ko -->            <tr>                <td colspan="3">                    <div class="row btn-toolbar">                        <input type="button" class="btn btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')"/>                        <input type="button" class="btn btn-danger" data-bind="click: onClearClick, value: $root.getLocString(\'pe.removeAll\')"" />                    </div>                </td>            </tr>        </tbody>    </table></script><script type="text/html" id="propertyeditor-modal">    <div class="input-group" data-bind="visible:!editor.isEditable,attr: {\'data-target\' : modalNameTarget}" data-toggle="modal">        <span data-bind="text: koText"></span>        <div class="input-group-btn">                  </div>    </div>    <div class="input-group" data-bind="visible:editor.isEditable" style="display:table">        <input class="form-control" type="text" data-bind="value: koValue" style="display:table-cell; width:100%" />        <div class="input-group-btn">            <button type="button" class="btn btn-default" style="display:table-cell; padding: 2px;"  data-toggle="modal" data-bind="attr: {\'data-target\' : modalNameTarget}">                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>            </button>        </div>    </div>    <div data-bind="attr: {id : modalName}" class="modal fade" role="dialog">        <div class="modal-dialog" style="width:60%;">            <div class="modal-content">                <div class="modal-header">                    <button type="button" class="close" data-dismiss="modal">&times;</button>                    <h4 class="modal-title" data-bind="text:editor.title"></h4>                </div>                  <div class="modal-body svd_notopbottompaddings">                    <!-- ko template: { name: \'propertyeditorcontent-\' + editorType, data: editor } -->                    <!-- /ko -->                </div>                <div class="modal-footer">                    <input type="button" class="btn btn-primary" data-bind="click: editor.onApplyClick, value: $root.getLocString(\'pe.apply\')" style="width:100px" />                    <input type="button" class="btn btn-default" data-bind="click: editor.onResetClick, value: $root.getLocString(\'pe.reset\')" style="width:100px" />                    <input type="button" class="btn btn-default" data-dismiss="modal" data-bind="value: $root.getLocString(\'pe.close\')" style="width:100px" />                </div>            </div>        </div>    </div></script><!--   <button type="button"  class="btn btn-default"data-toggle="modal" style="padding: 2px;" data-bind="attr: {\'data-target\' : modalNameTarget}">                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>            </button> --><script type="text/html" id="propertyeditor-number">    <input class="form-control" type="number" data-bind="value: koValue" style="width:100%" /></script><script type="text/html" id="propertyeditor-restfull">    <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-restfull">    <form>        <div class="form-group">            <label for="url">Url:</label>            <input id="url" type="text" data-bind="value:koUrl" class="form-control" />        </div>        <div class="form-group">            <label for="path">Path:</label>            <input id="path" type="text" data-bind="value:koPath" class="form-control" />        </div>        <div class="form-group">            <label for="valueName">valueName:</label>            <input id="valueName" type="text" data-bind="value:koValueName" class="form-control" />        </div>        <div class="form-group">            <label for="titleName">titleName:</label>            <input id="titleName" type="text" data-bind="value:koTitleName" class="form-control" />        </div>    </form>    <div id="restfullSurvey" style="width:100%;height:150px"></div></script><script type="text/html" id="propertyeditor-string">    <input class="form-control" type="text" data-bind="event:{blur: function(el, e){if($data.object != undefined){	if($data.object.PageCount != undefined){		var storyTemplate = JSON.parse(sessionStorage.template);		storyTemplate[title]=$data.editor.value_;		sessionStorage.template=JSON.stringify(storyTemplate);	} }}},value: koValue,attr:{readonly:title===\'pageId\' ||title===\'surveyId\'}" style="width:100%" /></script><script type="text/html" id="propertyeditor-text">    <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-text">    <textarea class="form-control" data-bind="value:koValue" style="width:100%" rows="10" autofocus="autofocus"></textarea></script><script type="text/html" id="propertyeditor-textitems">    <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-textitems"><div class="panel">    <table class="table">        <thead>            <tr>                <th data-bind="text: $root.getLocString(\'pe.name\')"></th>                <th data-bind="text: $root.getLocString(\'pe.title\')"></th>                <th></th>            </tr>        </thead>        <tbody>            <!-- ko foreach: koItems -->            <tr>                <td><input type="text" class="form-control" data-bind="value:koName" style="width:200px" /></td>                <td><input type="text" class="form-control" data-bind="value:koTitle" style="width:200px" /></td>                <td><input type="button" class="btn" data-bind="click: $parent.onDeleteClick, value: $root.getLocString(\'pe.delete\')"/></td>            </tr>            <!-- /ko -->            <tr>                <td colspan="4"><input type="button" class="btn btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')"/></td>            </tr>        </tbody>    </table></div></script><script type="text/html" id="propertyeditor-triggers">    <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-triggers"><div class="panel">    <div class="panel-heading">        <div class="row input-group">            <button type="button" class="dropdown-toggle input-group-addon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                <span class="glyphicon glyphicon-plus"></span>            </button>            <ul class="dropdown-menu input-group">                <!-- ko foreach: availableTriggers -->                <li><a href="#" data-bind="click: $parent.onAddClick($data)"><span data-bind="text:$data"></span></a></li>                <!-- /ko  -->            </ul>            <select class="form-control" data-bind="options: koItems, optionsText: \'koText\', value: koSelected"></select>            <span class="input-group-btn">                <button type="button" data-bind="enable: koSelected() != null, click: onDeleteClick" class="btn btn-default"><span class="glyphicon glyphicon-remove"></span></button>            </span>        </div>    </div>    <div data-bind="visible: koSelected() == null">        <div data-bind="visible: koQuestions().length == 0, text: $root.getLocString(\'pe.noquestions\')"></div>        <div data-bind="visible: koQuestions().length > 0, text: $root.getLocString(\'pe.createtrigger\')"></div>    </div>    <div data-bind="visible: koSelected() != null">        <div data-bind="with: koSelected">            <div class="row form-inline">                <div class="col-sm-4">                    <span data-bind="text: $root.getLocString(\'pe.triggerOn\')"></span><select class="form-control" data-bind="options:$parent.koQuestions, value: koName"></select> <span> </span>                </div>                <div class="col-sm-4">                    <select class="form-control" data-bind="options:availableOperators, optionsValue: \'name\', optionsText: \'text\', value:koOperator"></select>                </div>                <div class="col-sm-4">                    <input class="form-control" style="padding: 0" type="text" data-bind="visible: koRequireValue, value:koValue" />                </div>            </div>            <!-- ko if: koType() == \'visibletrigger\' -->            <div class="row">                <div class="col-sm-6">                    <!-- ko template: { name: \'propertyeditor-triggersitems\', data: pages } -->                    <!-- /ko -->                </div>                <div class="col-sm-6">                    <!-- ko template: { name: \'propertyeditor-triggersitems\', data: questions } -->                    <!-- /ko -->                </div>            </div>            <!-- /ko -->            <!-- ko if: koType() == \'completetrigger\' -->            <div class="row">               <div style="margin: 10px" data-bind="text: $root.getLocString(\'pe.triggerCompleteText\')"></div>            </div>            <!-- /ko -->            <!-- ko if: koType() == \'setvaluetrigger\' -->            <div class="row form-inline" style="margin-top:10px">                <div class="col-sm-6">                    <span data-bind="text: $root.getLocString(\'pe.triggerSetToName\')"></span><input class="form-control" type="text" data-bind="value:kosetToName" />                </div>                <div class="col-sm-1">                </div>                <div class="col-sm-5">                    <span data-bind="text: $root.getLocString(\'pe.triggerSetValue\')"></span><input class="form-control" type="text" data-bind="value:kosetValue" />                </div>            </div>            <div class="row form-inline">                <div class="col-sm-12">                    <input type="checkbox" data-bind="checked: koisVariable" /> <span data-bind="text: $root.getLocString(\'pe.triggerIsVariable\')"></span>                </div>            </div>            <!-- /ko -->        </div>    </div></div></script><script type="text/html" id="propertyeditor-triggersitems">    <div class="panel no-margins no-padding">        <div class="panel-heading">            <span data-bind="text: title"></span>        </div>        <div class="input-group">            <select class="form-control" multiple="multiple" data-bind="options:koChoosen, value: koChoosenSelected"></select>            <span class="input-group-btn" style="vertical-align:top">                <button type="button" data-bind="enable: koChoosenSelected() != null, click: onDeleteClick" class="btn"><span class="glyphicon glyphicon-remove"></span></button>            </span>        </div>        <div class="input-group" style="margin-top:5px">            <select class="form-control" data-bind="options:koObjects, value: koSelected"></select>            <span class="input-group-btn">                <button type="button" data-bind="enable: koSelected() != null, click: onAddClick" style="width:40px" class="btn btn-success"><span class="glyphicon glyphicon-plus"></span></button>            </span>        </div>    </div></script><script type="text/html" id="propertyeditor-validators">    <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-validators"><div class="panel">    <div class="panel-heading">        <div class="row input-group">            <button type="button" class="dropdown-toggle input-group-addon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                <span class="glyphicon glyphicon-plus"></span>            </button>            <ul class="dropdown-menu input-group">                <!-- ko foreach: availableValidators -->                <li><a href="#" data-bind="click: $parent.onAddClick($data)"><span data-bind="text:$data"></span></a></li>                <!-- /ko  -->            </ul>            <select class="form-control" data-bind="options: koItems, optionsText: \'text\', value: koSelected"></select>            <span class="input-group-btn">                <button type="button" data-bind="enable: koSelected() != null, click: onDeleteClick" class="btn"><span class="glyphicon glyphicon-remove"></span></button>            </span>        </div>    </div>    <div data-bind="template: { name: \'objecteditor\', data: selectedObjectEditor }"></div></div></script>';