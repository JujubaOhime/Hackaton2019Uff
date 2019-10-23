from django.urls import include, path
from rest_framework import routers
from app import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet),
#router.register(r'relacionados', views.RelacionadoViewSet),
router.register(r'Category', views.CategoryViewSet),
router.register(r'local', views.LocalViewSet),
router.register(r'report', views.ReportViewSet),
router.register(r'reportRecord', views.ReportRecordViewSet),
router.register(r'employee', views.EmployeeViewSet),
router.register(r'act_in', views.act_inViewSet),
router.register(r'describe', views.describeViewSet),
router.register(r'describe_record', views.describe_recordViewSet),
router.register(r'is_reported', views.is_reportedViewSet),

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]