from django.shortcuts import render
 
def index(request):
    # 针对模板标签初始化字典
    body = {} 
    # 模板具体内容
    body["head_title"] = "首页"
    body["body_title"] = "图像评分" 
    return render(request, template_name="index.html", context=body)

def index_old(request):
    return render(request, template_name="index_old.html")