Route::get('/testimoni', function () {
    $files = File::files(public_path('testimoni'));
    return view('testimoni', compact('files'));
});
