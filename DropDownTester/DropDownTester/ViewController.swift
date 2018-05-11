//
//  ViewController.swift
//  DropDownTester
//
//  Created by Pai, Anjana Ashok on 5/11/18.
//  Copyright © 2018 Pai, Anjana Ashok. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var mainWebView: UIWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let url = URL(string: "http://<computerName>.local:8100") // Replace "computerName"  with your computer name.
        let request = URLRequest(url: url!)
        view.bringSubview(toFront: mainWebView)
        mainWebView.loadRequest(request)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

