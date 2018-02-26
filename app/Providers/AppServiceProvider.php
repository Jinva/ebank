<?php

namespace App\Providers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
		// 设置错误级别
		error_reporting(E_ERROR &~ E_NOTICE);
	
		// 更改日志文件名，多运行环境多文件
		Log::useDailyFiles(storage_path().'/logs/laravel-'.php_sapi_name().'.log');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}