<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BoardController;

Route::get('/create-board', function () {
    return \App\Models\Board::create([
        'name' => 'My First Board'
    ]);
});

Route::get('/boards', [BoardController::class, 'index']);
Route::post('/boards', [BoardController::class, 'store']);
