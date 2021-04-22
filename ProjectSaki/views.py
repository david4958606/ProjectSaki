from django.shortcuts import render
 
def index(request):
    context          = {} # 新建字典
    context['title'] = "Index"  # 添加键值
    return render(request, 'index.html', context)