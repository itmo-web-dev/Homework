# coding: utf-8
"""
файл создает набор папок и сетап для проекта веб стораницы
"""
import os
import os.path


def main():

    dirs = ['assets/css', 'assets/img', 'assets/js', 'assets/pages']
    #TODO переделать dirs под словарь чтобы не было повторения слов

    path = raw_input("Enter path: ")
    print path
    if os.path.exists(path):
        for dir in dirs:
            dir_path = os.path.join(path, dir)
            if not os.path.exists(dir_path):
                try:
                    os.makedirs(dir_path)
                except Exception as e:
                    print 'error: {}'.format(e)
                    pass
    else:
        print 'enter correct path: \n{}'.format(path)

if __name__ == "__main__":
    main()