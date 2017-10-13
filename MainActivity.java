package com.example.gauravjayasawal.hackvt;

import android.annotation.TargetApi;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import com.esri.arcgisruntime.mapping.ArcGISMap;
import com.esri.arcgisruntime.mapping.Basemap;
import com.esri.arcgisruntime.mapping.view.MapView;
import com.google.gson.Gson;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    MapView mMapView;
    ArrayList<String> idAl = new ArrayList<>(), titleAl = new ArrayList<>(), bodyAl = new ArrayList<>(), postLevel2 = new ArrayList<>(),name = new ArrayList<>(), description = new ArrayList<>(), coordinatesX = new ArrayList<>(), coordinatesY = new ArrayList<>();
    String postsResult;
    ArrayList<String> tagsTitleAl = new ArrayList<>();

    public static String id[] = {"dsdf", "temp2", "temp3", "temp4", "temp5"};
    public static String title[] = {"dsdf", "temp2", "temp3", "temp4", "temp5"};
    public static String body[] = {"dsdf", "temp2", "temp3", "temp4", "temp5"};



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mMapView = (MapView) findViewById(R.id.mapView);
        ArcGISMap map = new ArcGISMap(Basemap.Type.NAVIGATION_VECTOR, 34.056295, -117.195800, 16);
        mMapView.setMap(map);
        new GetFuckingData().execute();

    }

    public class GetFuckingData extends AsyncTask<String, String, String> {

        InputStream inputStream = null;
        String result = "";
        Gson gson = new Gson();

        //
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @TargetApi(Build.VERSION_CODES.KITKAT)
        @Override
        protected String doInBackground(String... params) {
            String url_select = "http://anrmaps.vermont.gov/arcgis/rest/services/map_services/ACCD_OpenData/MapServer/12/query?where=1%3D1&outFields=OBJECTID,name,description,coordinates_X,coordinates_Y&outSR=4326&f=json";

            ArrayList<NameValuePair> param = new ArrayList<>();
            try {
                // Set up HTTP post
                HttpClient httpClient = new DefaultHttpClient();

                HttpPost httpPost = new HttpPost(url_select);
                httpPost.setEntity(new UrlEncodedFormEntity(param));
                HttpResponse httpResponse = httpClient.execute(httpPost);
                HttpEntity httpEntity = httpResponse.getEntity();

                // Read content & Log
                inputStream = httpEntity.getContent();

            } catch (UnsupportedEncodingException e1) {
                Log.e("UnsupportedEn", e1.toString());
                e1.printStackTrace();
            } catch (ClientProtocolException e2) {
                Log.e("ClientProtocolException", e2.toString());
                e2.printStackTrace();
            } catch (IllegalStateException e3) {
                Log.e("IllegalStateException", e3.toString());
                e3.printStackTrace();
            } catch (IOException e4) {
                Log.e("IOException", e4.toString());
                e4.printStackTrace();
            }

            // Convert response to string using String Builder
            try {
                BufferedReader bReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"), 8);
                StringBuilder sBuilder = new StringBuilder();

                String line = null;
                while ((line = bReader.readLine()) != null) {
                    sBuilder.append(line + "\n");
                }

                inputStream.close();
                result = sBuilder.toString();

                Log.d("resultMAIN", "" + result);

            } catch (Exception e) {
                Log.e("StringBuilding", "Error converting" + e.toString());
            }

            try {
                JSONObject parentObject = new JSONObject(result);
                postsResult = parentObject.getString("features");

            } catch (JSONException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }

            Log.d("see","whatsin"+postsResult);

            JSONArray jsonarray = null;
            try {
                jsonarray = new JSONArray(postsResult);

            } catch (JSONException e) {
                e.printStackTrace();
            }

            titleAl.clear();

            try {
                for (int i = 0; i < jsonarray.length(); i++) {

                    titleAl.add(jsonarray.get(i).toString());
                }
            } catch (Exception e) {

            }

            Log.d("tags", String.valueOf(titleAl.size())+ titleAl.get(0));

            for(int i=0;i<titleAl.size();i++) {
                try {
                    JSONObject parentObject = new JSONObject(titleAl.get(i));
                    postLevel2.add(parentObject.getString("attributes"));

                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }

            Log.d("lengthPostLevel2", String.valueOf(postLevel2.size()));

            for(int i=0; i<postLevel2.size();i++) {
                try {
                    JSONObject parentObject = new JSONObject(postLevel2.get(i));
                    name.add(parentObject.getString("name"));

                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }

            for(int i=0; i<postLevel2.size();i++) {
                try {
                    JSONObject parentObject = new JSONObject(postLevel2.get(i));
                    description.add(parentObject.getString("description"));

                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }

            for(int i=0; i<postLevel2.size();i++) {
                try {
                    JSONObject parentObject = new JSONObject(postLevel2.get(i));
                    coordinatesX.add(parentObject.getString("coordinates_X"));
                    coordinatesY.add(parentObject.getString("coordinates_Y"));
                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }






//            try {
//                for (int i = 0; i < jsonarray.length(); i++) {
//                    Log.d("result", "3" + jsonarray.get(i));
//
//                    tagsTitleAl.add(jsonarray.get(i).toString());
//                }
//            } catch (Exception e) {
//
//            }

            return "";
        }
    }


    @Override
    protected void onPause() {
        mMapView.pause();
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        mMapView.resume();
    }

}
