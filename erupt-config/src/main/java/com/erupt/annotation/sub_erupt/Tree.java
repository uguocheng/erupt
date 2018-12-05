package com.erupt.annotation.sub_erupt;

/**
 * Created by liyuepeng on 11/13/18.
 */
public @interface Tree {

    String id();

    String label();

    String pid();

    TreeLoadType loadType() default TreeLoadType.EAGER;

    String children() default "";
}