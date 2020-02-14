@extends('layouts.base')

@section('content')

  {{-- @include('comps.album')
  @include('comps.albums') --}}

    <div id="app">
      <h3>Test</h3>

      {{-- <albums-old></albums-old> --}}
      <albums></albums>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
    
@endsection