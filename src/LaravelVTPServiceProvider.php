<?php

namespace AvaCN\LaravelVTP;

use Illuminate\Support\ServiceProvider;
use AvaCN\LaravelVTP\Commands\PresetCommand;

class LaravelVTPServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                PresetCommand::class,
            ]);
        }
    }
}
