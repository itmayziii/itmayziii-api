# itmayziii-api
Backend headless CMS for tommymay.dev powered by [Payload CMS.][payload-cms]

## Production Deployment

```shell
gcloud functions deploy modifyGcsUploads \
  --gen2 \
  --trigger-event-filters="type=google.cloud.storage.object.v1.finalized" \
  --trigger-event-filters="bucket=tommy-may-dev" \
  --runtime="nodejs20" \
  --trigger-location="us" \
  --entry-point="modifyGcsUploads" \
  --region="us-central1" \
  --source="." \
  --ingress-settings="internal-only" \
  --no-allow-unauthenticated \
  --retry \
  --trigger-service-account="eventarc-trigger@itmayziii.iam.gserviceaccount.com" \
  --run-service-account="tommymay-dev-cms@itmayziii.iam.gserviceaccount.com"
```

[payload-cms]: https://payloadcms.com/
