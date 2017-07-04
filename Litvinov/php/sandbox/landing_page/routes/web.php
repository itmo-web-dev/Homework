<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('welcome');
});
*/

Route::group(['middleware'=>"web"], function(){
    // �������� ���������������� �����
    Route::match(['get','post'], '/', ['uses'=>'IndexController@execute', 'as'=>'home']);
    Route::get('/page/{alias}', ['uses'=>'PageController@execute', 'as'=>'page']);
    // ������ ��������� ��������������
    Route::auth();
});

// admin ��� ������ ��������������
Route::group(['prefix'=>'admin', 'middleware'=>'auth'], function(){
    // admin
    Route::get('/', function(){
        // ���������� ������������� ������ view
        return 0;
    });
    // admin/pages
    Route::group(['prefix'=>'pages'], function(){
        // ��������� ������ ����������� �������
        // admin/pages
        Route::get('/', ['uses'=>'PagesController@execute', 'as'=>'pages']);

        // ������� ���������� ����� ������� - ���������� ����� � ������ �� - ��������� get ��������� post
        // admin/pages/add
        Route::match(['get','post'], '/add', ['uses'=> 'PagesAddController@execute','as'=>'pagesAdd']);

        // ������������� ������� - ���������(Get) � ��������������(Post) �������� �������(delete)
        // admin/edit/2
        Route::match(['get', 'post', 'delete'], '/edit/{page}',
                     ['uses'=>'PagesEditController@execute','as'=>'pagesEdit']);
    });

    // admin/pages
    Route::group(['prefix'=>'portfolios'], function(){
        Route::get('/', ['uses'=>'PortfolioPagesController@execute', 'as'=>'portfolio']);
        Route::match(['get','post'], '/add', ['uses'=> 'PortfolioAddController@execute','as'=>'portfolioAdd']);
        Route::match(['get', 'post', 'delete'], '/edit/{portfolio}',
                     ['uses'=>'PortfolioEditController@execute','as'=>'portfolioEdit']);
    });

    Route::group(['prefix'=>'services'], function(){
        Route::get('/', ['uses'=>'ServicePagesController@execute', 'as'=>'services']);
        Route::match(['get','post'], '/add', ['uses'=> 'ServiceAddController@execute','as'=>'servicesAdd']);
        Route::match(['get', 'post', 'delete'], '/edit/{portfolio}',
                     ['uses'=>'ServiceEditController@execute','as'=>'servicesEdit']);
    });

});
