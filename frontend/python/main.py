from flask import Flask, render_template, request
import math

app = Flask(__name__)
no_of_rect = 0
no_of_tria = 0
no_of_semicir = 0

@app.route('/', methods=['GET', 'POST'])

def calculate():
    global no_of_rect
    global no_of_tria
    global no_of_semicir
    
    if request.method == 'POST':
        shaper = request.form.get('shape1')
        shapet = request.form.get('shape2')
        shapes = request.form.get('shape3')
        num_r = int(request.form.get('num_r', 0))
        num_t = int(request.form.get('num_t', 0))
        num_s = int(request.form.get('num_s', 0))
        measurementsr = [None] * num_r
        no_of_rect = len(measurementsr)
        measurementst = [None] * num_t
       
        no_of_tria = num_t
        measurementss = [None] * num_s
        no_of_semicir = len(measurementss)

        return render_template('index.html', shaper=shaper, shapet=shapet, shapes=shapes, measurementsr=measurementsr, measurementst=measurementst, measurementss=measurementss)
    return render_template('index.html')


@app.route('/calculate_wastage', methods=['POST'])
def calculate_wastage():
    global no_of_rect,no_of_tria,no_of_semicir
    measurementsr = request.form.getlist('measurementsr')
    measurementst = request.form.getlist('measurementst')
    measurementss = request.form.getlist('measurementss')
    rect = [ [],[] ]
    triangle = [ [],[] ]
    semicicle = []
    
    if no_of_rect !=0 :
        for i in range(no_of_rect):
            input_rl = f'r_length_{ i }' 
            input_rw = f'r_width_{ i }' # Assuming input fields are named input_0, input_1, ...
            input_rlen = request.form[input_rl]
            input_rwid = request.form[input_rw]
            rect[0].append(float(input_rlen))
            rect[1].append(float(input_rwid))
    
        r_area = 0

        for i in range(no_of_rect):
            r_area += (rect[0][i]*rect[1][i])
        print('area :',r_area)

        r_tile_length = float(request.form['r_tile_length'])
        r_tile_width = float(request.form['r_tile_width'])
        r_tile_price = float(request.form['r_tile_price'])
        r_tile_area = r_tile_length * r_tile_width

        r_total_area = r_area
        r_num_tiles = r_total_area / r_tile_area
        #print("r mo:",r_num_tiles)
        r_wastage = r_num_tiles -(r_num_tiles*r_tile_area) 
        #print("r was",r_wastage)
        if r_wastage < 0:
            r_num_tiles += 1
        r_num_tiles = r_num_tiles // 1
        r_wastage = (r_num_tiles * r_tile_area) - (r_total_area)

        
        
    else:
        r_wastage = 0
        r_num_tiles = 0
        r_tile_price = 0
        

    if no_of_tria !=0 :
        for j in range(no_of_tria):
            print(j)
            input_tb = f't_base_{ j }'
            input_th = f't_height_{ j }'
            input_tbase = request.form[input_tb]
            input_theight = request.form[input_th]
            print(input_tbase)
            print(input_theight)
            triangle[0].append(float(input_tbase))
            triangle[1].append(float(input_theight))

        
        t_area = 0

        
        #print(triangle)

        for i in range(no_of_tria):
            t_area += (triangle[0][i]*triangle[1][i]*0.5)

        


        t_tile_length = float(request.form['t_tile_length'])
        t_tile_width = float(request.form['t_tile_width'])
        t_tile_price = float(request.form['t_tile_price'])
        t_tile_area = t_tile_length * t_tile_width

 


        t_total_area = t_area
        t_num_tiles = t_total_area / t_tile_area
        
        t_wastage = t_num_tiles -(t_num_tiles*t_tile_area) 
        
        if t_wastage < 0:
            t_num_tiles += 1
        t_num_tiles = t_num_tiles // 1
        t_wastage = (t_num_tiles * t_tile_area) - (t_total_area)
    else:
        t_wastage = 0
        t_num_tiles = 0
        t_tile_price = 0
        
    if no_of_semicir !=0 :
        for k in range(no_of_semicir):
            input_sr = f's_radius_{ k }'
            input_srad = request.form[input_sr]
            
            semicicle.append(float(input_srad))
            

        
        s_area = 0

        
      

        for i in range(no_of_semicir):
            s_area += (semicicle[i]*semicicle[i]*0.5*math.pi)

        


        s_tile_length = float(request.form['s_tile_length'])
        s_tile_width = float(request.form['s_tile_width'])
        s_tile_price = float(request.form['s_tile_price'])
        s_tile_area = s_tile_length * s_tile_width

        


        s_total_area = s_area
        s_num_tiles = s_total_area / s_tile_area
        #print("r mo:",r_num_tiles)
        s_wastage = s_num_tiles -(s_num_tiles*s_tile_area) 
        #print("r was",r_wastage)
        if s_wastage < 0:
            s_num_tiles += 1
        s_num_tiles = s_num_tiles // 1
        s_wastage = (s_num_tiles * s_tile_area) - (s_total_area)

        #print('wastage :',s_wastage)
    else:
        s_wastage = 0
        s_num_tiles = 0
        s_tile_price = 0

    shaper = request.form.get('shape1')
    shapet = request.form.get('shape2')
    shapes = request.form.get('shape3')

    #wastage is working perfectly but teh mesurements list is empty thats the problem
    return render_template('index.html', shaper=shaper, shapet=shapet, shapes=shapes, measurementsr=[{}] * len(measurementsr),
                                 measurementst=[{}] * len(measurementst), measurementss=[{}] * len(measurementss),
                                  r_wastage=f'{r_wastage}',r_num_tiles=f'{r_num_tiles}',r_price=f'{r_num_tiles*r_tile_price}',
                                  t_wastage=f'{t_wastage}',t_num_tiles=f'{t_num_tiles}',t_price=f'{t_num_tiles*t_tile_price}',
                                  s_wastage=f'{s_wastage}',s_num_tiles=f'{s_num_tiles}',s_price=f'{s_num_tiles*s_tile_price}',
                                  total_t = f'{r_num_tiles+t_num_tiles+s_num_tiles}',
                                  total_w = f'{r_wastage+t_wastage+s_wastage}',
                                  total_p = f'{(r_num_tiles*r_tile_price)+(t_num_tiles*t_tile_price)+(s_num_tiles*s_tile_price)}')
                        






if __name__ == '__main__':
    app.run(debug=True)